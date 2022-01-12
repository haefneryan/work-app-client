import React from 'react'
import TableHeaders from '../components/layout/Table/TableHeaders'
import EngineerSelect from '../components/selects/EngineerSelect';

import classes from './AllOrders.css'

function Dashboard(props) {
    document.title = 'Scheduling Tool - Dashboard';
    const { dashboardOrders, deleteOrder, updateOwner, updateDesignComplete, updateBuildTime, backToTriage } = props;

    return (
        <div>
            <h3>DASHBOARD ({dashboardOrders.length})</h3>
            <table>
                <thead>
                    <tr>
                        <td>Customer</td>
                        <td>Style Number</td>
                        <td>Triage Owner</td>
                        <td>Owner</td>
                        <td>Workload</td>
                        <td>Buildtime</td>
                        <td>Triage Complete Date</td>
                        <td>Due Date</td>
                        <td>Design Complete</td>
                        <td>Send back to Triage</td>
                        <td>Delete</td>
                        <td>Sales Order</td>
                        <td>SO Line Item</td>
                    </tr>
                </thead>
                <tbody>
                    {dashboardOrders.map(order => {
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
                                <td className={classes.workload}>{order.workload}</td>
                                <td><input type='text' min='1' max='1000' defaultValue={order.buildtime} onChange={(e) => updateBuildTime(order, e)} className='workload'></input></td>
                                {/* <td><input type='text' min='1' max='1000' defaultValue={order.buildtime} onChange={(e) => updateBuildTime(order, e)} className='buildtime'></input></td> */}
                                <td>{order.triagecomplete}</td>
                                <td>{order.duedate}</td>
                                <td><button onClick={() => updateDesignComplete(order)}>COMPLETE</button></td>
                                <td><button onClick={() => backToTriage(order)}>SEND BACK</button></td>
                                <td><button onClick={() => deleteOrder(order)}>X</button></td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
