import React, { useState } from 'react';

import EngineerSelect from './selects/EngineerSelect';

function TriageOrderRow(props) {
    const { triageOrders, order, updateTriageOwner, updateOwner, updateWorkload, updateSameAs, updateTriageComplete, deleteOrder, displayOrderChildren } = props
    const [ inputValue, setInputValue ] = useState('');
    let index = 0;

    const handleInput = (e) => {
        const formattedSameAsNumber = formatSameAsNumber(e.target.value, e);
        setInputValue(formattedSameAsNumber);
    };
  
    function formatSameAsNumber(value, e) {
        if (!value) return value;
        const sameAsNumber = value
        if (sameAsNumber.length > 5) {
            if (sameAsNumber.length === 7) {
                return sameAsNumber.slice(0, 6)
            } else {
                return `${sameAsNumber.slice(0, 6)}-${sameAsNumber.slice(7, 9)}`;
            }
        } else {
            return sameAsNumber;
        }
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
                        <p className=''>{order.sameas}</p> : 
                        <input type='text' maxLength={9} placeholder='XXXXXX-XX' id={order._id} value={inputValue} onChange={(e) => {updateSameAs(order, e); handleInput(e)}} className='sameAsChildInput sameAsCell columnSearchFilter'></input>
                    }
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td><button onClick={() => updateTriageComplete(order, triageOrders)}>COMPLETE</button></td>
                <td><button disabled onClick={() => deleteOrder(order)}>X</button></td>
            </tr>
            {props.children}
        </>
    )
}

export default TriageOrderRow;
