import React from 'react'
import TableHeaders from '../components/layout/Table/TableHeaders'

//import classes from './AllOrders.css'

function Completed(props) {
    document.title = 'Scheduling Tool - Completed';
    const { completedOrders, deleteOrder, backToDesign } = props;

    return (
        <div>
            <h3>COMPLETED ({completedOrders.length})</h3>
            <table id='dataTable'>
                <thead>
                    <tr>
                        <td>Customer</td>
                        <td>Style Number</td>
                        <td>Triage Owner</td>
                        <td>Owner</td>
                        <td>Workload</td>
                        <td>Buildtime</td>
                        <td>Triage Complete</td>
                        <td>Due Date</td>
                        <td>Design Complete</td>
                        <td>Back to Design</td>
                        <td>Delete</td>
                        <td>Sales Order</td>
                        <td>SO Line Item</td>
                    </tr>
                </thead>
                <tbody>
                    {completedOrders.map(order => {
                        return (
                            <tr key={order._id}>
                                <td>{order.customer}</td>
                                <td>{order.stylenumber}</td>
                                <td>{order.triageowner}</td>
                                <td>{order.owner}</td>
                                <td>{order.workload}</td>
                                <td>{order.buildtime}</td>
                                <td>{order.triagecomplete}</td>
                                <td>{order.duedate}</td>
                                <td>{order.designcomplete}</td>
                                <td><button onClick={() => backToDesign(order)}>SEND BACK</button></td>
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

export default Completed
