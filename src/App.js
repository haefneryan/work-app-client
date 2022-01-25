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
  
  const updateTriageOwner = async (order, e) => {
    setOrders([...orders], order.triageowner = e.target.value)
    await axios.put(`${url}/${order._id}`, { triageowner: e.target.value })
  }

  const updateOwner = (order, e) => {
    setOrders([...orders], order.owner = e.target.value)
    axios.put(`${url}/${order._id}`, { owner: e.target.value })
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
    // setOrders([...orders], order.sameas = e.target.value)
    // axios.put(`${url}/${order._id}`, { sameas: e.target.value })
    // if (e.target.value.length === 9) {
    //   orders.forEach(x => {
    //     //let uniquekey = x.salesorder + '-' + x.solineitem
    //     if (x.uniquekey.includes(`${e.target.value}`)) {
    //       console.log(x)
    //       console.log(order)
    //       if (window.confirm(`Match Found. Do you want to mark ${order.uniquekey} to be the same as ${x.uniquekey}?`)) {
    //         setOrders({...orders}, x.sameasChildren.push(order))
    //         setOrders({...orders}, order.workload = 0.1, order.child = true)
    //         let newChildrenArray = []
    //         newChildrenArray.push(order)
    //         console.log(newChildrenArray)
    //         axios.put(`${url}/${x._id}`, { sameasChildren: newChildrenArray })
    //         axios.put(`${url}/${order._id}`, { workload: 0.1, child: true })
    //       }
    //     }
    //   })
    // }
  }

  const removeChildren = (order) => {
    order.sameasChildren.forEach(x => {
      console.log(x)
    })
    setOrders({...orders}, order.sameasChildren = [], order.child = false)
    axios.put(`${url}/${order._id}`, { sameasChildren: [], child: false })
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
    return (
      <>
        <div className="App">
          <Navbar triageOrders={triageOrders} dashboardOrders={dashboardOrders} completedOrders={completedOrders}/>
          <h1>SCHEDULING TOOL</h1>
          <Routes>
            <Route path='/allorders' element={<AllOrders orders={orders} updateTriageOwner={updateTriageOwner} updateOwner={updateOwner} updateWorkload={updateWorkload} />}></Route>
            <Route path='/' element={<Triage triageOrders={triageOrders} updateWorkload={updateWorkload} updateTriageOwner={updateTriageOwner} updateOwner={updateOwner} updateSameAs={updateSameAs} removeChildren={removeChildren} />}></Route>
            <Route path='/dashboard' element={<Dashboard dashboardOrders={dashboardOrders} updateOwner={updateOwner} updateBuildTime={updateBuildTime} />}></Route>
            <Route path='/completed' element={<Completed completedOrders={completedOrders} />}></Route>
            <Route path='/create-new-order' element={<AddOrder />}></Route>
          </Routes>
        </div>
      </>
    )
  }
}

export default App;