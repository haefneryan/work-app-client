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
    axios.put(`${url}/${order._id}`, {
      triagecomplete: null,
      duedate: null,
      sameAsChildren: newArray,
    });
    order.sameAsChildren.forEach((child) => {
      axios.put(`${url}/${child._id}`, { triagecomplete: null, duedate: null });
    });
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
        x.designcomplete = null;
      });
    }
    axios.put(`${url}/${order._id}`, {
      designcomplete: null,
      sameAsChildren: newArray,
    });
    order.sameAsChildren.forEach((child) => {
      axios.put(`${url}/${child._id}`, { designcomplete: null });
    });
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
  if (order.triageowner === "None" || order.triageowner === null) {
    alert("Please select a triage owner");
  } else if (order.workload === null || order.workload.length === 0) {
    alert("Please enter a workload");
  } else {
    let duedate = daysWithOutWeekend[12];
    let newArray = [];
    if (window.confirm("Are you sure you want to complete Triage?")) {
      order.sameAsChildren.forEach((child) => {
        child.triagecomplete = today;
        child.duedate = duedate;
        child.buildtime = 0.1;
        newArray = [...newArray, child];
        axios.put(`${url}/${child._id}`, {
          triagecomplete: today,
          duedate: duedate,
          buildtime: 0.1,
        });
      });
      await axios.put(`${url}/${order._id}`, {
        triagecomplete: today,
        duedate: duedate,
        sameAsChildren: newArray,
      });
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
    order.buildtime === undefined ||
    order.buildtime === "" ||
    order.buildtime === null
  ) {
    alert("Please enter a build time");
  } else {
    let newArray = [];
    let r = window.confirm(
      "Are you sure you want to complete this order from Design?"
    );
    if (r) {
      order.sameAsChildren.forEach((child) => {
        child.designcomplete = today;
        newArray = [...newArray, child];
        axios.put(`${url}/${child._id}`, {
          designcomplete: today,
        });
      });
      await axios.put(`${url}/${order._id}`, {
        designcomplete: today,
        sameAsChildren: newArray,
      });
      alert("Order has been completed from design");
    }
  }
};
