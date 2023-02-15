import React from "react";
import StyleNumberSelect from "../components/selects/StyleNumbersSelect";

import { url } from "../functions/url";
import axios from "axios";

const sgMail = require("@sendgrid/mail");

const addOrder = () => {
  if (document.getElementById("addOrderCustomer").value.length === 0) {
    alert("Please enter a Customer name");
  } else {
    alert("Order has been created!");
    axios
      .post(url, {
        customer: document.getElementById("addOrderCustomer").value,
        styleNumber: document.getElementById("addOrderStyleNumber").value,
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
      })
      .catch((error) => console.log(error));
    document.getElementById("addOrderCustomer").value = "";
    document.getElementById("addOrderStyleNumber").value = "Style Number 1";
  }
};

const sendEmail = () => {
  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: "haefner.ryan@gmail.com", // Change to your recipient
    from: "haefner.ryan@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

function AddOrder() {
  return (
    <div>
      Customer:{" "}
      <input
        type="text"
        placeholder="Enter the Customer name"
        id="addOrderCustomer"
      ></input>
      <br></br>
      <br></br>
      Style Number:{" "}
      <select id="addOrderStyleNumber">
        <StyleNumberSelect />
      </select>
      <br></br>
      <br></br>
      <button onClick={() => addOrder()}>Submit</button>
      <br></br>
      <br></br>
      <button onClick={() => sendEmail()}>TEST SEND EMAIL</button>
    </div>
  );
}

export default AddOrder;
