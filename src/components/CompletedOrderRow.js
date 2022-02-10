import React from 'react';

function CompletedOrderRow(props) {
    const { order, deleteOrder, backToDesign, displayOrderChildren } = props
    let index = 0;

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
                <td>{order.owner}</td>
                <td>{order.workload}</td>
                <td>{order.buildtime}</td>
                <td>{order.salesorder}</td>
                <td>{order.solineitem}</td>
                <td className={`sameAsParentCell ${order.sameasChildren.length > 0 ? 'sameAsParentCellWithChildren' : ''}`}></td>
                <td>{order.triagecomplete}</td>
                <td>{order.designcomplete}</td>
                <td>{order.duedate}</td>
                <td><button onClick={() => backToDesign(order)}>SEND BACK</button></td>
                <td><button disabled onClick={() => deleteOrder(order)}>X</button></td>
            </tr>
            {props.children}
        </>
    )
}

export default CompletedOrderRow;