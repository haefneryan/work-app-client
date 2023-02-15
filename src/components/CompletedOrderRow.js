import React from "react";

function CompletedOrderRow(props) {
  const { order, deleteOrder, backToDesign, displayOrderChildren } = props;
  let index = 0;

  return (
    <>
      <tr id={index - 1} key={order._id} className="orderParent">
        <td>
          {order.sameAsChildren.length > 0 ? (
            <button
              onClick={() => displayOrderChildren(order)}
              title="Show/Hide Children"
            >
              {order.displaysameAsChildren ? "-" : "+"}
            </button>
          ) : (
            <></>
          )}
        </td>
        <td>{order.customer}</td>
        <td>{order.styleNumber}</td>
        <td>{order.triageOwner}</td>
        <td>{order.owner}</td>
        <td>{order.workload}</td>
        <td>{order.buildTime}</td>
        <td>{order.salesOrder}</td>
        <td>{order.soLineItem}</td>
        <td
          className={`sameAsParentCell ${
            order.sameAsChildren.length > 0
              ? "sameAsParentCellWithChildren"
              : ""
          }`}
        ></td>
        <td>{order.triageComplete}</td>
        <td>{order.designComplete}</td>
        <td>{order.dueDate}</td>
        <td>
          <button onClick={() => backToDesign(order)}>SEND BACK</button>
        </td>
        <td>
          <button disabled onClick={() => deleteOrder(order)}>
            X
          </button>
        </td>
      </tr>
      {props.children}
    </>
  );
}

export default CompletedOrderRow;
