import React from "react";

import EngineerSelect from "./selects/EngineerSelect";
import {
  backToTriage,
  updateDesignComplete,
} from "../functions/orderStatusFunctions";
import { getToday } from "../functions/getToday";

function DashboardOrderRow(props) {
  const {
    order,
    updateOwner,
    updateBuildTime,
    deleteOrder,
    displayOrderChildren,
  } = props;
  let index = 0;

  const checkDueDate = (order) => {
    let today = getToday();
    if (order.duedate === today) {
      return "dueDateToday";
    } else if (order.duedate < today) {
      return "dueDateLate";
    }
  };

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
        <td>{order.triageOwner}</td>
        <td>
          <select
            defaultValue={order.owner}
            onChange={(e) => updateOwner(order, e)}
          >
            <EngineerSelect />
          </select>
        </td>
        <td>{order.workload}</td>
        <td>
          {order.child === false ? (
            <input
              type="text"
              min="1"
              max="1000"
              defaultValue={order.buildTime}
              onChange={(e) => updateBuildTime(order, e)}
              className="workload"
            ></input>
          ) : (
            <input
              disabled
              className="workload"
              value={order.buildTime}
            ></input>
          )}
        </td>
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
        <td></td>
        <td className={`${checkDueDate(order)}`}>{order.dueDate}</td>
        <td>
          <button onClick={() => updateDesignComplete(order)}>COMPLETE</button>
        </td>
        <td>
          <button onClick={() => backToTriage(order)}>SEND BACK</button>
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

export default DashboardOrderRow;
