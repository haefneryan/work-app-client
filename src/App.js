import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import AllOrders from './pages/AllOrders';
import AddOrder from './pages/AddOrder';
import Triage from './pages/Triage';
import TriageTest from './pages/TriageTest';
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
      setFilters(orders);
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

  const addOrder = () => {
    if (document.getElementById('addOrderCustomer').value.length === 0) {
      alert('Please enter a Customer name')
    } else {
      alert('Order has been created!')
      axios
        .post(url, {
          customer: document.getElementById('addOrderCustomer').value,
          stylenumber: document.getElementById('addOrderStyleNumber').value,
          triageowner: 'None',
          owner: 'None',
          workload: 2,
          buildtime: null,
          triagecomplete: null,
          designcomplete: null,
          duedate: null
        })
        .then(getOrders())
        .catch(error => console.log(error))
        document.getElementById('addOrderCustomer').value = '';
        document.getElementById('addOrderStyleNumber').value = 'Style Number 1';
    }
  }

  const deleteOrder = (order) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      axios
        .delete(`${url}/${order._id}`)
        .then(getOrders())
        .catch(error => console.log(error))
    }
  }

  const updateWorkload = (order, e) => {
    setOrders({...orders}, order.workload = e.target.value)
    axios.put(`${url}/${order._id}`, { workload: e.target.value })
  }

  const updateBuildTime = (order, e) => {
    setOrders({...orders}, order.buildtime = e.target.value)
    axios.put(`${url}/${order._id}`, { buildtime: e.target.value })
    console.log(order.buildtime)

  }

  const updateTriageOwner = async (order, e) => {
    setOrders({...orders}, order.triageowner = e.target.value)
    await axios.put(`${url}/${order._id}`, { triageowner: e.target.value })
  }
  
  const updateOwner = (order, e) => {
    setOrders({...orders}, order.owner = e.target.value)
    axios.put(`${url}/${order._id}`, { owner: e.target.value })
  }

  const getToday = () => {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()
    today = yyyy + '-' + mm + '-' + dd
    return today
  }

  const endDate = new Date("2030-12-30");
  const daysWithOutWeekend = [];
  for (let currentDate = new Date(getToday()); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
    if (currentDate.getDay() !== 5 && currentDate.getDay() !== 6) {
      daysWithOutWeekend.push(new Date(currentDate).toISOString().slice(0, 10));
    }
  }

  const updateTriageComplete = async (order) => {
    let today = getToday()
      if (order.triageowner === 'None') {
        alert('Please select a triage owner')
      } else if (order.workload === null || order.workload.length === 0) {
        alert('Please enter a workload')
      } else {
        if (window.confirm('Are you sure you want to complete Triage?')) {
          await axios
            .put(`${url}/${order._id}`, { 
              triagecomplete: today,
              duedate: daysWithOutWeekend[12]
            })
            .then(
              getOrders(),
              daysWithOutWeekend.splice(0, 1),
            )
            .catch(error => console.log(error))
          alert(`Order has been marked with triage date of ${today}`)
          daysWithOutWeekend.slice(1, 2);
        }
      }
  }

  const updateDesignComplete = async (order) => {
    console.log(order.buildtime)
    let today = getToday()
    if (order.owner === 'None') {
      alert('Please select an owner')
    } else if (order.buildtime === undefined || order.buildtime === '' || order.buildtime === null) {
      alert('Please enter a build time')
    } else {
      await axios
        .put(`${url}/${order._id}`, { designcomplete: today })
        .then(getOrders())
        .catch(error => console.log(error))
    }
  }

  const backToTriage = (order) => {
    let r = window.confirm('Are you sure you want to send this order back to Triage?')
    if(r) {
      axios
        .put(`${url}/${order._id}`, { 
          triagecomplete: null,
          duedate: null
        })
        .then(getOrders())
        .catch(error => console.log(error))
    }

  }

  const backToDesign = (order) => {
    let r = window.confirm('Are you sure you want to send this order back to Design?')
    if(r) {
      axios
        .put(`${url}/${order._id}`, { 
          designcomplete: null
        })
        .then(getOrders())
        .catch(error => console.log(error))
    }
  }

  const setFilters = (orders) => {
    setTriageOrders(orders.filter((x) => x.triagecomplete === null && x.designcomplete === null))
    setDashboardOrders(orders.filter((x) => x.triagecomplete !== null && x.designcomplete === null))
    setCompletedOrders(orders.filter((x) => x.triagecomplete !== null && x.designcomplete !== null))
  }

  if(dataLoaded === false)
    return (
      <p>loading...</p>
  )

  if(dataLoaded === true && triageOrders !== null) {

    console.log(dataLoaded)
    console.log(orders)
    console.log(triageOrders)

    return (
      <>
        <div className="App">
          <Navbar triageOrders={triageOrders} dashboardOrders={dashboardOrders} completedOrders={completedOrders}/>
          <h1>SCHEDULING TOOL</h1>
          <Routes>
            <Route path='/allorders' element={<AllOrders orders={orders} updateTriageOwner={updateTriageOwner} updateOwner={updateOwner} updateWorkload={updateWorkload} deleteOrder={deleteOrder} />}></Route>
            <Route path='/' element={<Triage triageOrders={triageOrders} updateWorkload={updateWorkload} updateTriageOwner={updateTriageOwner} updateOwner={updateOwner} updateTriageComplete={updateTriageComplete} deleteOrder={deleteOrder} daysWithOutWeekend={daysWithOutWeekend} />}></Route>
            <Route path='/triage-test' element={<TriageTest triageOrders={triageOrders} updateWorkload={updateWorkload} updateTriageOwner={updateTriageOwner} updateOwner={updateOwner} updateTriageComplete={updateTriageComplete} deleteOrder={deleteOrder} />}></Route>
            <Route path='/dashboard' element={<Dashboard dashboardOrders={dashboardOrders} updateOwner={updateOwner} updateBuildTime={updateBuildTime} deleteOrder={deleteOrder} updateDesignComplete={updateDesignComplete} backToTriage={backToTriage} getToday={getToday}/>}></Route>
            <Route path='/completed' element={<Completed completedOrders={completedOrders} deleteOrder={deleteOrder} backToDesign={backToDesign} />}></Route>
            <Route path='/create-new-order' element={<AddOrder addOrder={addOrder}/>}></Route>
          </Routes>
        </div>
      </>
    )
  }
}

export default App;
