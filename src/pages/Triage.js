import React, { useEffect, useState } from 'react'
import EngineerSelect from '../components/selects/EngineerSelect';
import ColumnFilters from '../components/layout/Table/ColumnFilters';

import { triageTableHeadersInitialState } from '../components/layout/Table/TriageTableHeaders';
import { updateTriageComplete, deleteOrder } from '../functions/orderStatusFunctions';

import './Triage.css';
import './AllOrders.css';

function Triage(props) {
    document.title = 'Scheduling Tool - Triage';
    const { triageOrders, updateWorkload, updateTriageOwner, updateOwner } = props;
    const [filteredTriageOrders, setFilteredTriageOrders] = useState(triageOrders);
    const [triageTableHeaders, setTriageTableHeaders] = useState(triageTableHeadersInitialState)

    const filterData = (column) => {
        setTriageTableHeaders([...triageTableHeaders], triageTableHeaders[column.target.id].filters = column.target.value.toLowerCase())
    }

    useEffect(() => {
        let filteredInfo = triageOrders;
        triageTableHeaders.forEach(y => {
            if (y.filterable === true && y.filters.length > 0) {
                filteredInfo = filteredInfo.filter(x => {
                    if (x[y.name].toLowerCase().includes(`${y.filters}`)) {
                        return x
                    }
                })
            }
        })
        console.log(filteredInfo)
        setFilteredTriageOrders(filteredInfo)
    }, [triageTableHeaders]);

    const sortColumns = (header) => {
        console.log(header)
        if (header.sortable === true) {
          triageTableHeaders.forEach(value => {
            if (value !== header) {
              value.sortAsc = false
              value.sortDesc = false
            }
          })
    
          // Sort Ascending
          if (header.sortAsc === false && header.sortDesc === false) {
            header.sortAsc = true;
            setFilteredTriageOrders([...filteredTriageOrders.sort((a, b) => {
              let x = a[header.name];
              let y = b[header.name];
        
              if (x < y) { return -1 } else if (x > y) { return 1 } else { return 0 }
            })])
            // Sort Descending
          } else if (header.sortAsc === true && header.sortDesc === false) {
            header.sortAsc = false;
            header.sortDesc = true;
            setFilteredTriageOrders([...filteredTriageOrders.sort((a, b) => {
              let x = a[header.name];
              let y = b[header.name];
        
              if (x > y) { return -1 } else if (x < y) { return 1 } else { return 0 }
            })])
          } else {
            header.sortAsc = false;
            header.sortDesc = false;
            setFilteredTriageOrders([...filteredTriageOrders.sort((a, b) => {
              let x = a._id;
              let y = b._id;
        
              if (x > y) { return 1 } else if (x < y) { return -1;} else { return 0 }
            })])
          }
        }
    }
    
    return (
        <div>
            <h3>TRIAGE ({filteredTriageOrders.length})</h3>
            <table>
                <thead>
                    <tr>
                        {triageTableHeaders.map(header => {
                            return (
                                <td key={header.name} onClick={() => sortColumns(header)} className='tdheader noselect'>
                                    <div className='headerName'>
                                        {header.displayName}
                                    </div>
                                    <div className='arrow'>
                                        {header.sortAsc ? ' ▲' : ''}
                                        {header.sortDesc ? ' ▼' : ''}
                                    </div>
                                </td>
                            )
                        })}
                    </tr>
                    <ColumnFilters triageTableHeaders={triageTableHeaders} filterData={filterData} triageOrders={triageOrders} />
                </thead>
                <tbody>
                    {filteredTriageOrders.map(order => {
                        return (
                            <tr key={order._id}>
                                <td>{order.customer}</td>
                                <td>{order.stylenumber}</td>
                                <td>
                                    <select defaultValue={order.triageowner} onChange={(e) => updateTriageOwner(order, e)}>
                                        <EngineerSelect />
                                    </select>
                                </td>
                                <td>
                                    <select defaultValue={order.owner} onChange={(e) => updateOwner(order, e)}>
                                        <EngineerSelect />
                                    </select>
                                </td>
                                <td><input type='text' min='1' max='1000' defaultValue={order.workload} onChange={(e) => updateWorkload(order, e)} className='workload'></input></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button onClick={() => updateTriageComplete(order)}>COMPLETE</button></td>
                                <td><button onClick={() => deleteOrder(order)}>X</button></td>
                                <td>{order.salesorder}</td>
                                <td>{order.solineitem}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Triage
