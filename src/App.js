import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import AllOrders from "./pages/AllOrders";
import AddOrder from "./pages/AddOrder";
import Triage from "./pages/Triage";
import Dashboard from "./pages/Dashboard";
import Completed from "./pages/Completed";

import { getToday } from "./functions/getToday";
import { url } from "./functions/url";
// import { addSalesOrderInfo } from "./functions/addSalesOrderInfo";
import axios from "axios";
require("dotenv").config();

const App = () => {
  const [orders, setOrders] = useState([]);
  const [triageOrders, setTriageOrders] = useState([]);
  const [dashboardOrders, setDashboardOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const renderCount = useRef(0);

  useEffect(() => {
    getOrders();
  }, [url]);

  useEffect(() => {
    renderCount.current++;
    if (renderCount.current > 0 && orders.length > 0) {
      setOrders(orders);
      filterOrderStatus();
      // addSalesOrderInfo(orders);
    }
  }, [orders]);

  useEffect(() => {
    if (orders.length > 0) {
      orders.forEach((addProp) => {
        addProp.displaysameAsChildren = false;
      });
    }
  }, []);

  useEffect(() => {
    // filterOrderStatus();
  }, [triageOrders]);

  const getOrders = async () => {
    try {
      const res = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      setOrders(res.data.body.Items);
      setDataLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  const updateSameAs = (order, e) => {
    //   setOrders([...orders], (order.sameas = e.target.value));
    //   axios.put(`${url}/${order._id}`, { sameas: e.target.value });
    //   if (e.target.value.length === 9) {
    //     orders.forEach((x) => {
    //       if (x.uniquekey.includes(`${e.target.value}`)) {
    //         if (
    //           window.confirm(
    //             `Match Found. Do you want to mark ${order.uniquekey} to be the same as ${x.uniquekey}?`
    //           )
    //         ) {
    //           let newArray = [...x.sameAsChildren, order];
    //           order.child = true;
    //           setTriageOrders(
    //             [...triageOrders],
    //             x.sameAsChildren.push(order),
    //             (order.workload = 0.1),
    //             (order.child = true),
    //             (order.triageowner = x.triageowner),
    //             (order.owner = x.owner)
    //           );
    //           axios.put(`${url}/${x._id}`, { sameAsChildren: newArray });
    //           axios.put(`${url}/${order._id}`, {
    //             workload: 0.1,
    //             child: true,
    //             triageowner: x.triageowner,
    //             owner: x.owner,
    //           });
    //         }
    //       }
    //     });
    //   }
  };

  const displayOrderChildren = (order) => {
    if (order.displaysameAsChildren) {
      setOrders([...orders], (order.displaysameAsChildren = false));
    } else {
      setOrders([...orders], (order.displaysameAsChildren = true));
    }
  };

  const removeChild = (order, child) => {
    //   if (
    //     window.confirm(
    //       `Are you sure you want to remove ${child.uniquekey} as a child of ${order.uniquekey}?`
    //     )
    //   ) {
    //     let newArray = [];
    //     let firstPart = order.sameAsChildren.slice(
    //       0,
    //       order.sameAsChildren.indexOf(child)
    //     );
    //     let secondPart = order.sameAsChildren.slice(
    //       order.sameAsChildren.indexOf(child) + 1
    //     );
    //     newArray = [...firstPart, ...secondPart];
    //     child.child = false;
    //     setTriageOrders([...triageOrders], (order.sameAsChildren = newArray));
    //     setTriageOrders([...triageOrders], (child.child = false));
    //     axios.put(`${url}/${order._id}`, { sameAsChildren: newArray });
    //     axios.put(`${url}/${child._id}`, { child: false });
    //   }
  };

  const filterOrderStatus = () => {
    let newTriageOrders = orders.filter((x) => {
      return x.triageComplete === null && x.designComplete === null;
    });
    setTriageOrders(newTriageOrders);
    let newDashboardOrders = orders.filter((x) => {
      return x.triageComplete !== null && x.designComplete === null;
    });
    setDashboardOrders(newDashboardOrders);
    let newCompletedOrders = orders.filter(
      (x) => x.triageComplete !== null && x.designComplete !== null
    );
    setCompletedOrders(newCompletedOrders);
  };

  const updateTriageComplete = async (order) => {
    const endDate = new Date("2030-12-30");
    const daysWithOutWeekend = [];
    for (
      let currentDate = new Date(getToday());
      currentDate <= endDate;
      currentDate.setDate(currentDate.getDate() + 1)
    ) {
      if (currentDate.getDay() !== 5 && currentDate.getDay() !== 6) {
        daysWithOutWeekend.push(
          new Date(currentDate).toISOString().slice(0, 10)
        );
      }
    }
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
        let index = triageOrders.findIndex((x) => x.id === order.id);
        let newTriageOrders = triageOrders;
        newTriageOrders.splice(index, 1);
        setTriageOrders(newTriageOrders);
        setDashboardOrders([...dashboardOrders, newOrder]);
      }
    }
  };

  const updateDesignComplete = async (order) => {
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
        let index = dashboardOrders.findIndex((x) => x.id === order.id);
        let newDashboardOrders = dashboardOrders;
        newDashboardOrders.splice(index, 1);
        setDashboardOrders(newDashboardOrders);
        setCompletedOrders([...completedOrders, newOrder]);
      }
    }
  };

  const backToDesign = (order) => {
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
      let index = completedOrders.findIndex((x) => x.id === order.id);
      let newCompletedOrders = completedOrders;
      newCompletedOrders.splice(index, 1);
      setCompletedOrders(newCompletedOrders);
      setDashboardOrders([...dashboardOrders, newOrder]);
    }
  };

  const backToTriage = (order) => {
    let r = window.confirm(
      "Are you sure you want to send this order back to Triage?"
    );
    if (r) {
      let newArray = order.sameAsChildren;
      // if (order.sameAsChildren.length > 0) {
      //   newArray.forEach((x) => {
      //     x.triagecomplete = null;
      //     x.duedate = null;
      //   });
      // }
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
      let index = dashboardOrders.findIndex((x) => x.id === order.id);
      let newDashboardOrders = dashboardOrders;
      newDashboardOrders.splice(index, 1);
      setDashboardOrders(newDashboardOrders);
      setTriageOrders([...triageOrders, newOrder]);
    }
  };

  if (dataLoaded === false) return <p>loading...</p>;

  if (dataLoaded === true && triageOrders !== null) {
    return (
      <>
        <div className="App">
          <Navbar
            triageOrders={triageOrders}
            dashboardOrders={dashboardOrders}
            completedOrders={completedOrders}
          />
          <h1>SCHEDULING TOOL</h1>
          <Routes>
            <Route path="*" element={<Navigate to="/triage" />}></Route>
            <Route
              path="/allorders"
              element={<AllOrders orders={orders} />}
            ></Route>
            <Route
              path="/triage"
              element={
                <Triage
                  triageOrders={triageOrders}
                  setTriageOrders={setTriageOrders}
                  updateSameAs={updateSameAs}
                  removeChild={removeChild}
                  displayOrderChildren={displayOrderChildren}
                  updateTriageComplete={updateTriageComplete}
                />
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  dashboardOrders={dashboardOrders}
                  displayOrderChildren={displayOrderChildren}
                  updateDesignComplete={updateDesignComplete}
                  backToTriage={backToTriage}
                  setDashboardOrders={setDashboardOrders}
                />
              }
            ></Route>
            <Route
              path="/completed"
              element={
                <Completed
                  completedOrders={completedOrders}
                  displayOrderChildren={displayOrderChildren}
                  backToDesign={backToDesign}
                />
              }
            ></Route>
            <Route
              path="/create-new-order"
              element={
                <AddOrder
                  triageOrders={triageOrders}
                  setTriageOrders={setTriageOrders}
                />
              }
            ></Route>
          </Routes>
        </div>
      </>
    );
  }
};

export default App;
