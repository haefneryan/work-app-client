import React, { useState, useEffect } from 'react';

import EngineerSelect from './selects/EngineerSelect';
import { backToTriage, updateDesignComplete } from '../functions/orderStatusFunctions';

function DashboardOrderRow(props) {
    const { order, updateOwner, updateWorkload, updateSameAs, deleteOrder, displayOrderChildren } = props
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
                <td>{order.triageowner}</td>
                <td>
                    <select defaultValue={order.owner} onChange={(e) => updateOwner(order, e)}>
                        <EngineerSelect />
                    </select>
                </td>
                <td>
                    {(order.child === false) ?
                       <input type='text' min='1' max='1000' defaultValue={order.workload} onChange={(e) => updateWorkload(e, order)} className='workload'></input> :
                       <input disabled className='workload' value={order.workload}></input>
                    }
                </td>
                <td></td>
                <td>{order.salesorder}</td>
                <td>{order.solineitem}</td>
                <td className={`sameAsParentCell ${order.sameasChildren.length > 0 ? 'sameAsParentCellWithChildren' : ''}`}></td>
                <td></td>
                <td></td>
                <td></td>
                <td><button onClick={() => updateDesignComplete(order)}>COMPLETE</button></td>
                <td><button onClick={() => backToTriage(order)}>SEND BACK</button></td>
                <td><button onClick={() => deleteOrder(order)}>X</button></td>
            </tr>
            {props.children}
        </>
    )
}

export default DashboardOrderRow;
