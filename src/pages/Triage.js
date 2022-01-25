import React, { useEffect, useState } from 'react'
import ColumnFilters from '../components/layout/Table/ColumnFilters';
import TriageOrderRow from '../components/TriageOrderRow';

import { triageTableHeadersInitialState } from '../components/layout/Table/TriageTableHeaders';
import { updateTriageComplete, deleteOrder } from '../functions/orderStatusFunctions';

import './Triage.css';
// import './AllOrders.css';

function Triage(props) {
    document.title = 'Scheduling Tool - Triage';
    const { triageOrders, updateWorkload, updateTriageOwner, updateOwner, updateSameAs, removeChildren } = props;
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
                            <>
                                <TriageOrderRow order={order} updateTriageOwner={updateTriageOwner} updateOwner={updateOwner} updateWorkload={updateWorkload} updateSameAs={updateSameAs} updateTriageComplete={updateTriageComplete} deleteOrder={deleteOrder} removeChildren={removeChildren}/>   
                                {/* {order.sameasChildren.map(child => {
                                    {console.log(child)}
                                    <TriageOrderRow order={child} updateTriageOwner={updateTriageOwner} updateOwner={updateOwner} updateWorkload={updateWorkload} updateSameAs={updateSameAs} updateTriageComplete={updateTriageComplete} deleteOrder={deleteOrder} removeChildren={removeChildren}/>   
                                })} */}
                                {/* <tr key={`${order._id}A`} className='childrenRow'>
                                    <td>
                                        Children
                                        <button onClick={() => removeChildren(order)}>Remove Children</button>
                                    </td>
                                </tr> */}
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Triage
