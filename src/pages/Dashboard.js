import React, { useState, useEffect } from 'react'
import EngineerSelect from '../components/selects/EngineerSelect';
import ColumnFilters from '../components/layout/Table/ColumnFilters';

import { dashboardTableHeadersInitialState } from '../components/layout/Table/DashboardTableHeaders';
import { getToday } from '../functions/getToday';
import { updateDesignComplete, backToTriage, deleteOrder } from '../functions/orderStatusFunctions';

import './AllOrders.css';
import './Dashboard.css';

function Dashboard(props) {
    document.title = 'Scheduling Tool - Dashboard';
    const { dashboardOrders, updateOwner, updateBuildTime } = props;
    const [filteredDashboardOrders, setFilteredDashboardOrders] = useState(dashboardOrders);
    const [dashboardTableHeaders, setDashboardTableHeaders] = useState(dashboardTableHeadersInitialState)

    const checkDueDate = (order) => {
        let today =  getToday();
        if (order.duedate === today) { return 'dueDateToday'
        } else if (order.duedate < today) { return 'dueDateLate' } 
    }

    const filterData = (column) => {
        setDashboardTableHeaders([...dashboardTableHeaders], dashboardTableHeaders[column.target.id].filters = column.target.value.toLowerCase())
    }

    useEffect(() => {
        console.log(dashboardTableHeaders)
        let filteredInfo = dashboardOrders;
        dashboardTableHeaders.forEach(y => {
            if (y.filterable === true && y.filters.length > 0 && y.name !== 'salesorder' && y.name !== 'solineitem') {
                console.log(y)
                filteredInfo = filteredInfo.filter(x => {
                    console.log(x)
                    console.log(x[y.name])
                    if (x[y.name].toLowerCase().includes(`${y.filters}`)) {
                        return x
                    }
                })
            }
        })
        setFilteredDashboardOrders(filteredInfo)
    }, [dashboardTableHeaders]);

    const sortColumns = (header) => {
        if (header.sortable === true) {
            dashboardTableHeaders.forEach(value => {
            if (value !== header) {
              value.sortAsc = false
              value.sortDesc = false
            }
          })
    
          // Sort Ascending
          if (header.sortAsc === false && header.sortDesc === false) {
            header.sortAsc = true;
            setFilteredDashboardOrders([...filteredDashboardOrders.sort((a, b) => {
              let x = a[header.name];
              let y = b[header.name];
        
              if (x < y) { return -1 } else if (x > y) { return 1 } else { return 0 }
            })])
            // Sort Descending
          } else if (header.sortAsc === true && header.sortDesc === false) {
            header.sortAsc = false;
            header.sortDesc = true;
            setFilteredDashboardOrders([...filteredDashboardOrders.sort((a, b) => {
              let x = a[header.name];
              let y = b[header.name];
        
              if (x > y) { return -1 } else if (x < y) { return 1 } else { return 0 }
            })])
          } else {
            header.sortAsc = false;
            header.sortDesc = false;
            setFilteredDashboardOrders([...filteredDashboardOrders.sort((a, b) => {
              let x = a._id;
              let y = b._id;
        
              if (x > y) { return 1 } else if (x < y) { return -1;} else { return 0 }
            })])
          }
        }
      }

    return (
        <div>
            <h3>DASHBOARD ({filteredDashboardOrders.length})</h3>
            <table>
                <thead>
                    <tr>
                        {dashboardTableHeaders.map(header => {
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
                    <ColumnFilters dashboardTableHeaders={dashboardTableHeaders} filterData={filterData}/>
                </thead>
                <tbody>
                    {filteredDashboardOrders.map(order => {
                        return (
                            <tr key={order._id}>
                                <td>{order.customer}</td>
                                <td>{order.stylenumber}</td>
                                <td>{order.triageowner}</td>
                                <td>
                                    <select defaultValue={order.owner} onChange={(e) => updateOwner(order, e)}>
                                        <EngineerSelect />
                                    </select>
                                </td>
                                <td className='workload'>{order.workload}</td>
                                <td><input type='text' min='1' max='1000' defaultValue={order.buildtime} onChange={(e) => updateBuildTime(order, e)} className='workload'></input></td>
                                <td>{order.triagecomplete}</td>
                                <td></td>
                                <td className={`${checkDueDate(order)}`}>{order.duedate}</td>
                                <td><button onClick={() => updateDesignComplete(order)}>COMPLETE</button></td>
                                <td><button onClick={() => backToTriage(order)}>SEND BACK</button></td>
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

export default Dashboard
