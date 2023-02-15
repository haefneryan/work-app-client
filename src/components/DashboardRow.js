import React from "react";

import EngineerSelect from "./selects/EngineerSelect";
import {
  updateDesignComplete,
  backToTriage,
  deleteOrder,
} from "../functions/orderStatusFunctions";

import { getToday } from "../functions/getToday";

function DashboardRow(props) {
  const { order, updateOwner, updateBuildTime } = props;

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
      <tr key={order.id}>
        <td></td>
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
        <td className="workload">{order.workload}</td>
        <td>
          <input
            type="text"
            min="1"
            max="1000"
            defaultValue={order.buildTime}
            onChange={(e) => updateBuildTime(order, e)}
            className="workload"
          ></input>
        </td>
        <td>{order.salesOrder}</td>
        <td>{order.soLineItem}</td>
        <td></td>
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
          <button onClick={() => deleteOrder(order)}>X</button>
        </td>
      </tr>
    </>
  );
}

export default DashboardRow;
