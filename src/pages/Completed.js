import React, { useState, useEffect } from 'react'
import ColumnFilters from '../components/layout/Table/ColumnFilters';

import { completedTableHeadersInitialState } from '../components/layout/Table/CompletedTableHeaders';
import { backToDesign, deleteOrder } from '../functions/orderStatusFunctions';

import './Completed.css';
import './AllOrders.css';

function Completed(props) {
    document.title = 'Scheduling Tool - Completed';
    const { completedOrders } = props;
    const [filteredCompletedOrders, setFilteredCompletedOrders] = useState(completedOrders);
    const [completedTableHeaders, setCompletedTableHeaders] = useState(completedTableHeadersInitialState)

    const filterData = (column) => {
        setCompletedTableHeaders([...completedTableHeaders], completedTableHeaders[column.target.id].filters = column.target.value.toLowerCase())
    }

    useEffect(() => {
        let filteredInfo = completedOrders;
        completedTableHeaders.forEach(y => {
            if (y.filterable === true && y.filters.length > 0) {
                filteredInfo = filteredInfo.filter(x => {
                    if (x[y.name].toLowerCase().includes(`${y.filters}`)) {
                        return x
                    }
                })
            }
        })
        setFilteredCompletedOrders(filteredInfo)
    }, [completedTableHeaders]);

    const sortColumns = (header) => {
        console.log(header)
        if (header.sortable === true) {
            completedTableHeaders.forEach(value => {
            if (value !== header) {
              value.sortAsc = false
              value.sortDesc = false
            }
          })
    
          // Sort Ascending
          if (header.sortAsc === false && header.sortDesc === false) {
            header.sortAsc = true;
            setFilteredCompletedOrders([...filteredCompletedOrders.sort((a, b) => {
              let x = a[header.name];
              let y = b[header.name];
        
              if (x < y) { return -1 } else if (x > y) { return 1 } else { return 0 }
            })])
            // Sort Descending
          } else if (header.sortAsc === true && header.sortDesc === false) {
            header.sortAsc = false;
            header.sortDesc = true;
            setFilteredCompletedOrders([...filteredCompletedOrders.sort((a, b) => {
              let x = a[header.name];
              let y = b[header.name];
        
              if (x > y) { return -1 } else if (x < y) { return 1 } else { return 0 }
            })])
          } else {
            header.sortAsc = false;
            header.sortDesc = false;
            setFilteredCompletedOrders([...filteredCompletedOrders.sort((a, b) => {
              let x = a._id;
              let y = b._id;
        
              if (x > y) { return 1 } else if (x < y) { return -1;} else { return 0 }
            })])
          }
        }
      }

    console.log(completedOrders)

    return (
        <div>
            <h3>COMPLETED ({filteredCompletedOrders.length})</h3>
            <table id='dataTable'>
            <thead>
                    <tr>
                        {completedTableHeaders.map(header => {
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
                    <ColumnFilters completedTableHeaders={completedTableHeaders} filterData={filterData}/>
                </thead>
                <tbody>
                    {filteredCompletedOrders.map(order => {
                        return (
                            <tr key={order._id}>
                                <td>{order.customer}</td>
                                <td>{order.stylenumber}</td>
                                <td>{order.triageowner}</td>
                                <td>{order.owner}</td>
                                <td>{order.workload}</td>
                                <td>{order.buildtime}</td>
                                <td>{order.salesorder}</td>
                                <td>{order.solineitem}</td>
                                <td>{order.triagecomplete}</td>
                                <td>{order.designcomplete}</td>
                                <td>{order.duedate}</td>
                                <td><button onClick={() => backToDesign(order)}>SEND BACK</button></td>
                                <td><button onClick={() => deleteOrder(order)}>X</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Completed
