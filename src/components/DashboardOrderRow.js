import React from 'react';

import EngineerSelect from './selects/EngineerSelect';
import { backToTriage, updateDesignComplete } from '../functions/orderStatusFunctions';
import { getToday } from '../functions/getToday';

function DashboardOrderRow(props) {
    const { order, updateOwner, updateBuildTime, deleteOrder, displayOrderChildren } = props
    let index = 0;

    const checkDueDate = (order) => {
        let today =  getToday();
        if (order.duedate === today) { return 'dueDateToday'
        } else if (order.duedate < today) { return 'dueDateLate' } 
    }

    return (
        <>
            <tr id={index-1} key={order._id} className='orderParent'>
                <td>
                    {order.sameasChildren.length > 0 ? 
                    <button onClick={() => displayOrderChildren(order)} title='Show/Hide Children'>{order.displaySameAsChildren ? '-' : '+'}</button>
                    : <></>
                    }
                </td>
                <td>{order.customer}</td>
                <td>{order.stylenumber}</td>
                <td>{order.triageowner}</td>
                <td>
                    <select defaultValue={order.owner} onChange={(e) => updateOwner(order, e)}>
                        <EngineerSelect />
                    </select>
                </td>
                <td>{order.workload}</td>
                <td>
                    {(order.child === false) ?
                       <input type='text' min='1' max='1000' defaultValue={order.buildtime} onChange={(e) => updateBuildTime(order, e)} className='workload'></input> :
                       <input disabled className='workload' value={order.buildtime}></input>
                    }
                </td>
                <td>{order.salesorder}</td>
                <td>{order.solineitem}</td>
                <td className={`sameAsParentCell ${order.sameasChildren.length > 0 ? 'sameAsParentCellWithChildren' : ''}`}></td>
                <td>{order.triagecomplete}</td>
                <td></td>
                <td className={`${checkDueDate(order)}`}>{order.duedate}</td>
                <td><button onClick={() => updateDesignComplete(order)}>COMPLETE</button></td>
                <td><button onClick={() => backToTriage(order)}>SEND BACK</button></td>
                <td><button disabled onClick={() => deleteOrder(order)}>X</button></td>
            </tr>
            {props.children}
        </>
    )
}

export default DashboardOrderRow;
