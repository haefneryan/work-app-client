import React from 'react';

import EngineerSelect from './selects/EngineerSelect';

function TriageOrderRow(props) {
    const { order, updateTriageOwner, updateOwner, updateWorkload, updateSameAs, updateTriageComplete, deleteOrder, removeChildren } = props

    let index = 0;

    return (
        <>
            <tr id={index-1} key={order._id} className='orderParent'>
                <td>
                    {order.sameasChildren.length > 0 ? 
                    <button value={index-1} onClick={(e) => test(e, order)}>+</button>
                    : <></>
                    }
                    ({order.sameasChildren.length})
                </td>
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
                <td>
                    {(order.child === false) ?
                       <input type='text' min='1' max='1000' defaultValue={order.workload} onChange={(e) => updateWorkload(order, e)} className='workload'></input> :
                       <input disabled className='workload' value={order.workload}></input>
                    }
                </td>
                <td></td>
                <td>{order.salesorder}</td>
                <td>{order.solineitem}</td>
                <td className={`sameAsParentCell ${order.sameasChildren.length > 0 ? 'sameAsParentCellWithChildren' : ''}`}>
                    {(order.child === true || order.sameasChildren.length > 0) ?
                        <input disabled className='sameAsChildInput sameAsCell columnSearchFilter' value={order.sameas}></input> : 
                        <input type='text' maxLength={9} placeholder='XXXXXX-XX' id={order._id} defaultValue={order.sameas} onChange={(e) => updateSameAs(order, e)} className='sameAsChildInput sameAsCell columnSearchFilter'></input>
                    }
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td><button onClick={() => updateTriageComplete(order)}>COMPLETE</button></td>
                <td><button onClick={() => deleteOrder(order)}>X</button></td>
                
            </tr>
             
        </>
    )
}

export default TriageOrderRow;
