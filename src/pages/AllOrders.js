import React, { useState, useEffect} from 'react'
import ColumnFilters from '../components/layout/Table/ColumnFilters';

import { allOrdersTableHeadersInitialState } from '../components/layout/Table/AllOrdersTableHeaders';

import './AllOrders.css'

function AllOrders(props) {
    const { orders, deleteOrder } = props;
    const [filteredAllOrders, setFilteredAllOrders] = useState(orders);
    const [allOrdersTableHeaders, setAllOrdersTableHeaders] = useState(allOrdersTableHeadersInitialState)

    const filterData = (column) => {
        setAllOrdersTableHeaders([...allOrdersTableHeaders], allOrdersTableHeaders[column.target.id].filters = column.target.value.toLowerCase())
    }

    useEffect(() => {
        console.log(allOrdersTableHeaders)
        let filteredInfo = orders;
        allOrdersTableHeaders.forEach(y => {
            if (y.filterable === true && y.filters.length > 0) {
                filteredInfo = filteredInfo.filter(x => {
                    console.log(x)
                    console.log(y.name)
                    if (x[y.name].toLowerCase().includes(`${y.filters}`)) {
                        return x
                    }
                })
            }
        })
        setFilteredAllOrders(filteredInfo)
    }, [allOrdersTableHeaders]);

    const sortColumns = (header) => {
        if (header.sortable === true) {
            allOrdersTableHeaders.forEach(value => {
                if (value !== header) {
                value.sortAsc = false
                value.sortDesc = false
                }
            })
    
            // Sort Ascending
            if (header.sortAsc === false && header.sortDesc === false) {
                header.sortAsc = true;
                setFilteredAllOrders([...filteredAllOrders.sort((a, b) => {
                let x = a[header.name];
                let y = b[header.name];
            
                if (x < y) { return -1 } else if (x > y) { return 1 } else { return 0 }
                })])
                // Sort Descending
            } else if (header.sortAsc === true && header.sortDesc === false) {
                header.sortAsc = false;
                header.sortDesc = true;
                setFilteredAllOrders([...filteredAllOrders.sort((a, b) => {
                let x = a[header.name];
                let y = b[header.name];
            
                if (x > y) { return -1 } else if (x < y) { return 1 } else { return 0 }
                })])
            } else {
                header.sortAsc = false;
                header.sortDesc = false;
                setFilteredAllOrders([...filteredAllOrders.sort((a, b) => {
                let x = a._id;
                let y = b._id;
            
                if (x > y) { return 1 } else if (x < y) { return -1;} else { return 0 }
                })])
            }
        }
    }

    console.log(filteredAllOrders)

    return (
        <div>
            <h3>ALL ORDERS ({filteredAllOrders.length})</h3>
            <table>
                <thead>
                    <tr>
                        {allOrdersTableHeaders.map(header => {
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
                    <ColumnFilters allOrdersTableHeaders={allOrdersTableHeaders} filterData={filterData}/>
                </thead>
                <tbody>
                    {filteredAllOrders.map(order => {
                        return (
                            <tr key={order._id}>
                                <td>{order.customer}</td>
                                <td>{order.stylenumber}</td>
                                <td>{order.triageowner}</td>
                                <td>{order.owner}</td>
                                <td>{order.workload}</td>
                                <td>{order.buildtime}</td>
                                <td>{order.triagecomplete}</td>
                                <td>{order.designcomplete}</td>
                                <td>{order.duedate}</td>
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

export default AllOrders
