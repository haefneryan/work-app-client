import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import AllOrders from './pages/AllOrders';
import AddOrder from './pages/AddOrder';
import Triage from './pages/Triage';
import Dashboard from './pages/Dashboard';
import Completed from './pages/Completed';

import axios from 'axios';
require('dotenv').config();

const App = () => {
  let url;
  const port = process.env.REACT_APP_PORT || 4000;
  if (process.env.REACT_APP_NODE_ENV === 'development') {
    url = `http://localhost:${port}`;
  } else {
    url = 'https://stormy-plateau-67088.herokuapp.com';
  }
  const [orders, setOrders] = useState({});
  const [triageOrders, setTriageOrders] = useState({});
  const [dashboardOrders, setDashboardOrders] = useState({});
  const [completedOrders, setCompletedOrders] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const renderCount = useRef(0);

  useEffect(() => {   
    getOrders();
  }, [url]);

  useEffect(() => {
    renderCount.current++
    if(renderCount.current > 0 && orders.length > 0) {
      setOrders(orders)
      filterOrderStatus(orders);
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

  const updateWorkload = (order, e) => {
    setOrders({...orders}, order.workload = e.target.value)
    axios.put(`${url}/${order._id}`, { workload: e.target.value })
  }

  const updateBuildTime = (order, e) => {
    setOrders({...orders}, order.buildtime = e.target.value)
    axios.put(`${url}/${order._id}`, { buildtime: e.target.value })
  }

  const updateTriageOwner = async (order, e) => {
    setOrders({...orders}, order.triageowner = e.target.value)
    await axios.put(`${url}/${order._id}`, { triageowner: e.target.value })
  }
  
  const updateOwner = (order, e) => {
    setOrders({...orders}, order.owner = e.target.value)
    axios.put(`${url}/${order._id}`, { owner: e.target.value })
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
            <Route path='/' element={<Triage triageOrders={triageOrders} updateWorkload={updateWorkload} updateTriageOwner={updateTriageOwner} updateOwner={updateOwner} />}></Route>
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