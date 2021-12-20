import React, { useMemo } from 'react'
import TableHeaders from '../components/layout/Table/TableHeaders';
import EngineerSelect from '../components/selects/EngineerSelect';
import { useTable, useSortBy, useFilters } from 'react-table';
import { COLUMNS } from '../components/columns';
import { ColumnFilter } from '../components/ColumnFilter';

//import classes from './AllOrders.css'

function TriageTest(props) {
    const { triageOrders, testFunction, deleteOrder, updateWorkload, updateTriageOwner, updateOwner, updateTriageComplete } = props;

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => triageOrders, [])
    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const tableInstance = useTable({
        columns,
        data,
        defaultColumn
    },
    useFilters,
    useSortBy)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <div>
            <h3>TRIAGE ({triageOrders.length})</h3>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => {
                        return (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map( column => {
                                return (
                                    <th {...column.getHeaderProps()}>
                                        <div {...column.getSortByToggleProps()}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                                            </span>
                                        </div>
                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                )
                            })}
                        </tr>
                        )
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TriageTest
