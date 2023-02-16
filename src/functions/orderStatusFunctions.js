import { url } from "./url";
import axios from "axios";

export const deleteOrder = (order) => {
  if (window.confirm("Are you sure you want to delete this order?")) {
    axios.delete(`${url}/${order._id}`);
    alert("Order has been deleted");
  }
};

// export const updateTriageOwner = (order, e) => {
//   updateOrder(order);
// };

// export const updateOwner = (order) => {
//   updateOrder(order);
// };

// export const updateWorkload = (order, e) => {
//   updateOrder({ ...order, workload: e.target.value });
// };

// export const updateBuildTime = (order, e) => {
//   updateOrder({ ...order, buildTime: e.target.value });
// };

export const updateOrder = (order) => {
  axios.put(url, order);
};
