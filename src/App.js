import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import AllOrders from "./pages/AllOrders";
import AddOrder from "./pages/AddOrder";
import Triage from "./pages/Triage";
import Dashboard from "./pages/Dashboard";
import Completed from "./pages/Completed";

import { url } from "./functions/url";
import { addSalesOrderInfo } from "./functions/addSalesOrderInfo";
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
      filterOrderStatus(orders);
      addSalesOrderInfo(orders);
    }
  }, [orders]);

  useEffect(() => {
    if (orders.length > 0) {
      orders.forEach((addProp) => {
        addProp.displaysameAsChildren = false;
      });
    }
  }, []);

  const getOrders = async () => {
    try {
      console.log(url);
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

  const updateTriageOwner = (order, e) => {
    setOrders([...orders], (order.triageowner = e.target.value));
    console.log(`${url}`);
    console.log(order);
    // axios.put(url, order);
    // order.sameAsChildren.forEach((child) => {
    //   setOrders([...orders], (child.triageowner = e.target.value));
    //   let newArray = order.sameAsChildren;
    //   newArray[newArray.indexOf(child)].triageowner = e.target.value;
    // axios.put(`${url}`, {
    //   sameAsChildren: newArray,
    //   triageowner: e.target.value,
    // });
    // axios.put(`${url}/${order._id}`, { sameAsChildren: newArray });
    // axios.put(`${url}/${child._id}`, { triageowner: e.target.value });
    // });
  };

  const updateOwner = (order, e) => {
    //   setOrders([...orders], (order.owner = e.target.value));
    //   axios.put(`${url}/${order._id}`, { owner: e.target.value });
    //   order.sameAsChildren.forEach((child) => {
    //     setOrders([...orders], (child.owner = e.target.value));
    //     let newArray = order.sameAsChildren;
    //     newArray[newArray.indexOf(child)].owner = e.target.value;
    //     axios.put(`${url}/${order._id}`, { sameAsChildren: newArray });
    //     axios.put(`${url}/${child._id}`, { owner: e.target.value });
    //   });
  };

  const updateWorkload = (order, e) => {
    //   setOrders([...orders], (order.workload = e.target.value));
    //   axios.put(`${url}`, { workload: e.target.value });
  };

  const updateBuildTime = (order, e) => {
    //   setOrders([...orders], (order.buildtime = e.target.value));
    //   axios.put(`${url}/${order._id}`, { buildtime: e.target.value });
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

  const filterOrderStatus = (orders) => {
    console.log(orders);
    setTriageOrders(
      orders.filter(
        (x) => x.triageComplete === null && x.designComplete === null
      )
    );
    setDashboardOrders(
      orders.filter(
        (x) => x.triageComplete !== null && x.designComplete === null
      )
    );
    setCompletedOrders(
      orders.filter((x) => {
        console.log(x);
        return x.triageComplete !== null && x.designComplete !== null;
      })
    );
  };

  if (dataLoaded === false) return <p>loading...</p>;

  if (dataLoaded === true && triageOrders !== null) {
    console.log("here");
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
              element={
                <AllOrders
                  orders={orders}
                  updateTriageOwner={updateTriageOwner}
                  updateOwner={updateOwner}
                  updateWorkload={updateWorkload}
                />
              }
            ></Route>
            <Route
              path="/triage"
              element={
                <Triage
                  triageOrders={triageOrders}
                  updateWorkload={updateWorkload}
                  updateTriageOwner={updateTriageOwner}
                  updateOwner={updateOwner}
                  updateSameAs={updateSameAs}
                  removeChild={removeChild}
                  displayOrderChildren={displayOrderChildren}
                />
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  dashboardOrders={dashboardOrders}
                  updateOwner={updateOwner}
                  updateBuildTime={updateBuildTime}
                  displayOrderChildren={displayOrderChildren}
                  updateWorkload={updateWorkload}
                />
              }
            ></Route>
            <Route
              path="/completed"
              element={
                <Completed
                  completedOrders={completedOrders}
                  displayOrderChildren={displayOrderChildren}
                />
              }
            ></Route>
            <Route path="/create-new-order" element={<AddOrder />}></Route>
          </Routes>
        </div>
      </>
    );
  }
};

export default App;
