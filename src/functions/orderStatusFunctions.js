import { getToday } from "./getToday";
import { url } from "./url";
import axios from "axios";

export const backToTriage = (order) => {
    let r = window.confirm('Are you sure you want to send this order back to Triage?')
    if(r) {
      axios
        .put(`${url}/${order._id}`, { 
          triagecomplete: null,
          duedate: null
        })
        .catch(error => console.log(error))
        alert('Order was sent back to triage')
    }
  }

export const updateDesignComplete = async (order) => {
    let today = getToday()
    if (order.owner === 'None') {
        alert('Please select an owner')
    } else if (order.buildtime === undefined || order.buildtime === '' || order.buildtime === null) {
        alert('Please enter a build time')
    } else {
        let r = window.confirm('Are you sure you want to complete this order from Design?')
        if (r) {
        await axios
            .put(`${url}/${order._id}`, { designcomplete: today })
            .catch(error => console.log(error))
        alert('Order has been completed from design')
        }
    }
}

export const backToDesign = (order) => {
    let r = window.confirm('Are you sure you want to send this order back to Design?')
    if(r) {
        axios
            .put(`${url}/${order._id}`, { 
            designcomplete: null
            })
            .catch(error => console.log(error))
            alert('Order was sent back to Design')
    }
}


export const deleteOrder = (order) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
        axios
            .delete(`${url}/${order._id}`)
            .catch(error => console.log(error))
        alert('Order has been deleted')
    }
}

const endDate = new Date("2030-12-30");
const daysWithOutWeekend = [];
for (let currentDate = new Date(getToday()); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
  if (currentDate.getDay() !== 5 && currentDate.getDay() !== 6) {
    daysWithOutWeekend.push(new Date(currentDate).toISOString().slice(0, 10));
  }
}

export const updateTriageComplete = async (order, triageOrders) => {
  let today = getToday()
    if (order.triageowner === 'None' || order.triageowner === null) {
      alert('Please select a triage owner')
    } else if (order.workload === null || order.workload.length === 0) {
      alert('Please enter a workload')
    } else {
      let duedate = daysWithOutWeekend[12]
      if (window.confirm('Are you sure you want to complete Triage?')) {
        await axios.put(`${url}/${order._id}`, { 
            triagecomplete: today,
            duedate: duedate
          })
        
        order.sameasChildren.forEach(child => {
          const index = triageOrders.findIndex(obj => {
            return obj._id === child._id
          })
          console.log(index)
          console.log(triageOrders[index])
          axios.put(`${url}/${child._id}`, { 
            triagecomplete: today,
            duedate: duedate
          })
        })
        alert(`Order has been marked with triage date of ${today}`)
        daysWithOutWeekend.slice(1, 2);
      }
    }
}