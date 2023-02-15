import { getToday } from "./getToday";
import { url } from "./url";
import axios from "axios";

export const backToTriage = (order) => {
  let r = window.confirm(
    "Are you sure you want to send this order back to Triage?"
  );
  if (r) {
    let newArray = order.sameAsChildren;
    if (order.sameAsChildren.length > 0) {
      newArray.forEach((x) => {
        x.triagecomplete = null;
        x.duedate = null;
      });
    }
    let newOrder = {
      ...order,
      triageComplete: null,
      dueDate: null,
      sameAsChildren: newArray,
    };
    axios.put(url, newOrder);
    // CHILDREN CODE
    // order.sameAsChildren.forEach((o) => {
    //   axios.put(url, { triagecomplete: null, duedate: null });
    // });
    alert("Order was sent back to triage");
  }
};

export const backToDesign = (order) => {
  let r = window.confirm(
    "Are you sure you want to send this order back to Design?"
  );
  if (r) {
    let newArray = order.sameAsChildren;
    if (order.sameAsChildren.length > 0) {
      newArray.forEach((x) => {
        x.designComplete = null;
      });
    }
    let newOrder = {
      ...order,
      designComplete: null,
    };
    axios.put(url, newOrder);
    // order.sameAsChildren.forEach(() => {
    //   axios.put(url, { designcomplete: null });
    // });
    alert("Order was sent back to Design");
  }
};

export const deleteOrder = (order) => {
  if (window.confirm("Are you sure you want to delete this order?")) {
    axios.delete(`${url}/${order._id}`);
    alert("Order has been deleted");
  }
};

const endDate = new Date("2030-12-30");
const daysWithOutWeekend = [];
for (
  let currentDate = new Date(getToday());
  currentDate <= endDate;
  currentDate.setDate(currentDate.getDate() + 1)
) {
  if (currentDate.getDay() !== 5 && currentDate.getDay() !== 6) {
    daysWithOutWeekend.push(new Date(currentDate).toISOString().slice(0, 10));
  }
}

export const updateTriageComplete = async (order) => {
  let today = getToday();
  if (order.triageOwner === "None" || order.triageOwner === null) {
    alert("Please select a triage owner");
  } else if (order.workload === null || order.workload.length === 0) {
    alert("Please enter a workload");
  } else {
    let duedate = daysWithOutWeekend[12];
    let newArray = [];
    if (window.confirm("Are you sure you want to complete Triage?")) {
      // order.sameAsChildren.forEach((child) => {
      //   child.triagecomplete = today;
      //   child.duedate = duedate;
      //   child.buildtime = 0.1;
      //   newArray = [...newArray, child];
      //   axios.put(url, {
      //     triageComplete: today,
      //     dueDate: duedate,
      //     buildTime: 0.1,
      //   });
      // });
      let newOrder = {
        ...order,
        triageComplete: today,
        dueDate: duedate,
        sameAsChildren: newArray,
      };
      await axios.put(url, newOrder);
      alert(`Order has been marked with triage date of ${today}`);
      daysWithOutWeekend.slice(1, 2);
    }
  }
};

export const updateDesignComplete = async (order) => {
  let today = getToday();
  if (order.owner === "None") {
    alert("Please select an owner");
  } else if (
    order.buildTime === undefined ||
    order.buildTime === "" ||
    order.buildTime === null
  ) {
    alert("Please enter a build time");
  } else {
    let newArray = [];
    let r = window.confirm(
      "Are you sure you want to complete this order from Design?"
    );
    if (r) {
      // order.sameAsChildren.forEach((child) => {
      //   child.designComplete = today;
      //   newArray = [...newArray, child];
      //   axios.put(url, {
      //     designComplete: today,
      //   });
      // });
      let newOrder = {
        ...order,
        designComplete: today,
        sameAsChildren: newArray,
      };
      await axios.put(url, newOrder);
      alert("Order has been completed from design");
    }
  }
};
