import React, { useState } from "react";
import StyleNumberSelect from "../components/selects/StyleNumbersSelect";

import { url } from "../functions/url";
import axios from "axios";

function AddOrder(props) {
  const { triageOrders, setTriageOrders } = props;
  const [customer, setCustomer] = useState("");
  const [styleNumber, setStyleNumber] = useState("Style Number 1");

  const addOrder = () => {
    if (document.getElementById("addOrderCustomer").value.length === 0) {
      alert("Please enter a Customer name");
    } else {
      alert("Order has been created!");
      const newOrder = {
        customer: customer,
        styleNumber: styleNumber,
        triageOwner: "None",
        owner: "None",
        workload: 2,
        buildTime: null,
        triageComplete: null,
        designComplete: null,
        dueDate: null,
        salesOrder: "-",
        soLineItem: "10",
        sameAs: false,
        sameAsChildren: [],
        child: false,
        uniqueKey: null,
      };
      axios.post(url, newOrder).catch((error) => console.log(error));
      setCustomer("");
      setStyleNumber("Style Number 1");
      setTriageOrders([...triageOrders, newOrder]);
    }
  };

  return (
    <div>
      Customer:{" "}
      <input
        type="text"
        placeholder="Enter the Customer name"
        id="addOrderCustomer"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <br></br>
      <br></br>
      Style Number:{" "}
      <select
        id="addOrderStyleNumber"
        onChange={(e) => setStyleNumber(e.target.value)}
      >
        <StyleNumberSelect />
      </select>
      <br></br>
      <br></br>
      <button onClick={() => addOrder()}>Submit</button>
    </div>
  );
}

export default AddOrder;
