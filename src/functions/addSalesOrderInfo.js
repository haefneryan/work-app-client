import { url } from "./url";
import axios from "axios";

export const addSalesOrderInfo = (orders) => {
    orders.forEach(x => {
        let salesOrderString = '';
        for (let i in x._id) {
            if (x._id[i] >= '0' && x._id[i] <= '9') {
                if (salesOrderString.length <= 5) {
                    salesOrderString = salesOrderString + x._id[i]
                }
            }
        }
        axios.put(`${url}/${x._id}`, { salesorder: salesOrderString, solineitem: '10'})
    })
}