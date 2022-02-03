import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import AllOrders from './pages/AllOrders';
import AddOrder from './pages/AddOrder';
import Triage from './pages/Triage';
import Dashboard from './pages/Dashboard';
import Completed from './pages/Completed';

import { url } from './functions/url';
import { addSalesOrderInfo } from './functions/addSalesOrderInfo';
import axios from 'axios';
require('dotenv').config();

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
    renderCount.current++
    if(renderCount.current > 0 && orders.length > 0) {
      setOrders(orders)
      filterOrderStatus(orders)
      addSalesOrderInfo(orders)
    }
  }, [orders])

  useEffect(() => {
    if(orders.length > 0) {
      triageOrders.forEach(addProp => {
        addProp.displaySameAsChildren = false
      })
    }
  
  }, []);
  
  const getOrders = async () => {
    try {
      const res = await axios.get(url, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
          }
      })
      setOrders(res.data.data)
      setDataLoaded(true)
    } catch (err) {
      console.log(err)
    }
  }
  
  const updateTriageOwner = (order, e) => {
    console.log(e.target.value)
    setOrders([...orders], order.triageowner = e.target.value)
    axios.put(`${url}/${order._id}`, { triageowner: e.target.value })
    order.sameasChildren.forEach(child => {
      setOrders([...orders], child.triageowner = e.target.value)
      let newArray = order.sameasChildren
      newArray[newArray.indexOf(child)].triageowner = e.target.value;
      axios.put(`${url}/${order._id}`, { sameasChildren: newArray });
      axios.put(`${url}/${child._id}`, { triageowner: e.target.value });
    })
  }

  const updateOwner = (order, e) => {
    setOrders([...orders], order.owner = e.target.value)
    axios.put(`${url}/${order._id}`, { owner: e.target.value })
    order.sameasChildren.forEach(child => {
      setOrders([...orders], child.owner = e.target.value)
      let newArray = order.sameasChildren
      newArray[newArray.indexOf(child)].owner = e.target.value;
      axios.put(`${url}/${order._id}`, { sameasChildren: newArray });
      axios.put(`${url}/${child._id}`, { owner: e.target.value });
    })
  }

  const updateWorkload = (order, e) => {
    setOrders([...orders], order.workload = e.target.value)
    axios.put(`${url}/${order._id}`, { workload: e.target.value })
  }

  const updateBuildTime = (order, e) => {
    setOrders([...orders], order.buildtime = e.target.value)
    axios.put(`${url}/${order._id}`, { buildtime: e.target.value })
  }

  const updateSameAs = (order, e) => {
    setOrders([...orders], order.sameas = e.target.value)
    axios.put(`${url}/${order._id}`, { sameas: e.target.value })
    if (e.target.value.length === 9) {
      orders.forEach(x => {
        if (x.uniquekey.includes(`${e.target.value}`)) {
          if (window.confirm(`Match Found. Do you want to mark ${order.uniquekey} to be the same as ${x.uniquekey}?`)) {
            let newArray = [...x.sameasChildren, order];
            order.child = true;
            console.log(order)
            setTriageOrders([...triageOrders], 
              x.sameasChildren.push(order),
              order.workload = 0.1,
              order.child = true,
              order.triageowner = x.triageowner,
              order.owner = x.owner
            )
            axios.put(`${url}/${x._id}`, { sameasChildren: newArray })
            axios.put(`${url}/${order._id}`, { workload: 0.1, child: true, triageowner: x.triageowner, owner: x.owner })
          }
        }
      })
    }
  }

  const displayOrderChildren = (order) => {
    if(order.displaySameAsChildren) {
      setTriageOrders([...triageOrders], order.displaySameAsChildren = false)
    } else {
      setTriageOrders([...triageOrders], order.displaySameAsChildren = true)
    }
  }

  const removeChild = (order, child) => {
    if(window.confirm(`Are you sure you want to remove ${child.uniquekey} as a child of ${order.uniquekey}?`)) {
      let newArray = []
      let firstPart = order.sameasChildren.slice(0, order.sameasChildren.indexOf(child))
      let secondPart = order.sameasChildren.slice(order.sameasChildren.indexOf(child) + 1)
      newArray = [...firstPart, ...secondPart]
      child.child = false
      
      setTriageOrders([...triageOrders], order.sameasChildren = newArray)
      setTriageOrders([...triageOrders], child.child = false)
      axios.put(`${url}/${order._id}`, { sameasChildren: newArray})
      axios.put(`${url}/${child._id}`, { child: false})
    }
  }

  const filterOrderStatus = (orders) => {
    setTriageOrders(orders.filter((x) => x.triagecomplete === null && x.designcomplete === null))
    setDashboardOrders(orders.filter((x) => x.triagecomplete !== null && x.designcomplete === null))
    setCompletedOrders(orders.filter((x) => x.triagecomplete !== null && x.designcomplete !== null))
  }

  if(dataLoaded === false)
    return (
      <p>loading...</p>
  )

  if(dataLoaded === true && triageOrders !== null) {
    console.log(triageOrders)
    console.log(dashboardOrders)
    
    return (
      <>
        <div className="App">
          <Navbar triageOrders={triageOrders} dashboardOrders={dashboardOrders} completedOrders={completedOrders}/>
          <h1>SCHEDULING TOOL</h1>
          <Routes>
            <Route path='/allorders' element={<AllOrders orders={orders} updateTriageOwner={updateTriageOwner} updateOwner={updateOwner} updateWorkload={updateWorkload} />}></Route>
            <Route path='/triage' element={<Triage triageOrders={triageOrders} updateWorkload={updateWorkload} updateTriageOwner={updateTriageOwner} updateOwner={updateOwner} updateSameAs={updateSameAs} removeChild={removeChild} displayOrderChildren={displayOrderChildren}/>}></Route>
            <Route path='/dashboard' element={<Dashboard dashboardOrders={dashboardOrders} updateOwner={updateOwner} updateBuildTime={updateBuildTime} displayOrderChildren={displayOrderChildren} updateWorkload={updateWorkload} />}></Route>
            <Route path='/completed' element={<Completed completedOrders={completedOrders} />}></Route>
            <Route path='/create-new-order' element={<AddOrder />}></Route>
          </Routes>
        </div>
      </>
    )
  }
}

export default App;