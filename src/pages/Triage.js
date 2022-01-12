import React from 'react'
import TableHeaders from '../components/layout/Table/TableHeaders'
import EngineerSelect from '../components/selects/EngineerSelect';

//import classes from './AllOrders.css'

function Triage(props) {
    document.title = 'Scheduling Tool - Triage';
    const { triageOrders, deleteOrder, updateWorkload, updateTriageOwner, updateOwner, updateTriageComplete, daysWithOutWeekend } = props;

    console.log(daysWithOutWeekend[0])

    return (
        <div>
            <h3>TRIAGE ({triageOrders.length})</h3>
            <table>
                <thead>
                    <tr>
                        <td>Customer</td>
                        <td>Style Number</td>
                        <td>Triage Owner</td>
                        <td>Owner</td>
                        <td>Workload</td>
                        <td>Buildtime</td>
                        <td>Triage Complete</td>
                        <td>Delete</td>
                        <td>Sales Order</td>
                        <td>SO Line Item</td>
                    </tr>
                </thead>
                <tbody>
                    {triageOrders.map(order => {
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
                                <td>-</td>
                                <td><button onClick={() => updateTriageComplete(order)}>COMPLETE</button></td>
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

export default Triage
