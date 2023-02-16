import React, { useState } from "react";
import { updateOrder } from "../functions/orderStatusFunctions";
import EngineerSelect from "./selects/EngineerSelect";

function TriageOrderRow(props) {
  const {
    triageOrders,
    setTriageOrders,
    order,
    updateSameAs,
    updateTriageComplete,
    deleteOrder,
    displayOrderChildren,
  } = props;
  const [inputValue, setInputValue] = useState("");
  let index = 0;

  const handleInput = (e) => {
    const formattedSameAsNumber = formatSameAsNumber(e.target.value, e);
    setInputValue(formattedSameAsNumber);
  };

  const localUpdateTriageOwner = (order, e) => {
    order.triageOwner = e.target.value;
    let index = triageOrders.findIndex((x) => x.id === order.id);
    let newTriageOrders = triageOrders;
    newTriageOrders[index] = order;
    setTriageOrders(newTriageOrders);
    updateOrder(order);
  };

  const localUpdateOwner = (order, e) => {
    order.owner = e.target.value;
    let index = triageOrders.findIndex((x) => x.id === order.id);
    let newTriageOrders = triageOrders;
    newTriageOrders[index] = order;
    setTriageOrders(newTriageOrders);
    updateOrder(order);
  };

  const localUpdateWorkload = (order, e) => {
    order.workload = e.target.value;
    let index = triageOrders.findIndex((x) => x.id === order.id);
    let newTriageOrders = triageOrders;
    newTriageOrders[index] = order;
    setTriageOrders(newTriageOrders);
    updateOrder(order);
  };

  function formatSameAsNumber(value, e) {
    if (!value) return value;
    const sameAsNumber = value;
    if (sameAsNumber.length > 5) {
      if (sameAsNumber.length === 7) {
        return sameAsNumber.slice(0, 6);
      } else {
        return `${sameAsNumber.slice(0, 6)}-${sameAsNumber.slice(7, 9)}`;
      }
    } else {
      return sameAsNumber;
    }
  }

  return (
    <>
      <tr id={index - 1} key={order._id} className="orderParent">
        <td>
          {order.sameAsChildren.length > 0 ? (
            <button
              onClick={() => displayOrderChildren(order)}
              title="Show/Hide Children"
            >
              {order.displaySameAsChildren ? "-" : "+"}
            </button>
          ) : (
            <></>
          )}
        </td>
        <td>{order.customer}</td>
        <td>{order.styleNumber}</td>
        <td>
          <select
            defaultValue={order.triageOwner}
            onChange={(e) => localUpdateTriageOwner(order, e)}
          >
            <EngineerSelect />
          </select>
        </td>
        <td>
          <select
            defaultValue={order.owner}
            onChange={(e) => localUpdateOwner(order, e)}
          >
            <EngineerSelect />
          </select>
        </td>
        <td>
          {order.child === false ? (
            <input
              type="text"
              min="1"
              max="1000"
              // value={order.workload}
              defaultValue={order.workload}
              onChange={(e) => localUpdateWorkload(order, e)}
              className="workload"
            ></input>
          ) : (
            <input disabled className="workload" value={order.workload}></input>
          )}
        </td>
        <td></td>
        <td>{order.salesOrder}</td>
        <td>{order.soLineItem}</td>
        <td
          className={`sameAsParentCell ${
            order.sameAsChildren.length > 0
              ? "sameAsParentCellWithChildren"
              : ""
          }`}
        >
          {order.child === true || order.sameAsChildren.length > 0 ? (
            <p className="">{order.sameas}</p>
          ) : (
            <input
              disabled
              type="text"
              maxLength={9}
              placeholder="XXXXXX-XX"
              id={order._id}
              value={inputValue}
              onChange={(e) => {
                updateSameAs(order, e);
                handleInput(e);
              }}
              className="sameAsChildInput sameAsCell columnSearchFilter"
            ></input>
          )}
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button onClick={() => updateTriageComplete(order)}>COMPLETE</button>
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

export default TriageOrderRow;
