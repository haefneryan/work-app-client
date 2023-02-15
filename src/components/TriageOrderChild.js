import React from "react";

import "./OrderChildren.css";

function TriageOrderChild(props) {
  const { order, child, removeChild } = props;

  return (
    <tr className="childrenRow">
      <td>
        <button
          onClick={() => removeChild(order, child)}
          className="removeChildBtn"
          title="Remove Child"
        >
          X
        </button>
      </td>
      <td>{child.customer}</td>
      <td>{child.styleNumber}</td>
      <td>{child.triageOwner}</td>
      <td>{child.owner}</td>
      <td>{child.workload}</td>
      <td></td>
      <td>{child.salesOrder}</td>
      <td>{child.soLineItem}</td>
      <td>{child.sameas}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
}

export default TriageOrderChild;
