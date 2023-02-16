import React, { useState, useEffect } from "react";
import ColumnFilters from "../components/layout/Table/ColumnFilters";

import { dashboardTableHeadersInitialState } from "../components/layout/Table/DashboardTableHeaders";
import ColumnHeaderCell from "../components/layout/Table/ColumnHeaderCell";

import { deleteOrder } from "../functions/orderStatusFunctions";

import "./AllOrders.css";
import "./Dashboard.css";
import DashboardOrderRow from "../components/DashboardOrderRow";
import OrderChild from "../components/OrderChild";

function Dashboard(props) {
  document.title = "Scheduling Tool - Dashboard";
  const {
    dashboardOrders,
    setDashboardOrders,
    displayOrderChildren,
    updateDesignComplete,
    backToTriage,
  } = props;
  const [filteredDashboardOrders, setFilteredDashboardOrders] =
    useState(dashboardOrders);
  const [dashboardTableHeaders, setDashboardTableHeaders] = useState(
    dashboardTableHeadersInitialState
  );

  const filterData = (column) => {
    setDashboardTableHeaders(
      [...dashboardTableHeaders],
      (dashboardTableHeaders[column.target.id].filters =
        column.target.value.toLowerCase())
    );
  };

  useEffect(() => {
    let filteredInfo = dashboardOrders;
    dashboardTableHeaders.forEach((y) => {
      if (y.filterable === true && y.filters.length > 0) {
        filteredInfo = filteredInfo.filter((x) => {
          if (x[y.name].toLowerCase().includes(`${y.filters}`)) {
            return x;
          }
        });
      }
    });
    setFilteredDashboardOrders(filteredInfo);
  }, [dashboardTableHeaders]);

  const sortColumns = (header) => {
    if (header.sortable === true) {
      dashboardTableHeaders.forEach((value) => {
        if (value !== header) {
          value.sortAsc = false;
          value.sortDesc = false;
        }
      });

      // Sort Ascending
      if (header.sortAsc === false && header.sortDesc === false) {
        header.sortAsc = true;
        setFilteredDashboardOrders([
          ...filteredDashboardOrders.sort((a, b) => {
            let x = a[header.name];
            let y = b[header.name];

            if (x < y) {
              return -1;
            } else if (x > y) {
              return 1;
            } else {
              return 0;
            }
          }),
        ]);
        // Sort Descending
      } else if (header.sortAsc === true && header.sortDesc === false) {
        header.sortAsc = false;
        header.sortDesc = true;
        setFilteredDashboardOrders([
          ...filteredDashboardOrders.sort((a, b) => {
            let x = a[header.name];
            let y = b[header.name];

            if (x > y) {
              return -1;
            } else if (x < y) {
              return 1;
            } else {
              return 0;
            }
          }),
        ]);
      } else {
        header.sortAsc = false;
        header.sortDesc = false;
        setFilteredDashboardOrders([
          ...filteredDashboardOrders.sort((a, b) => {
            let x = a._id;
            let y = b._id;

            if (x > y) {
              return 1;
            } else if (x < y) {
              return -1;
            } else {
              return 0;
            }
          }),
        ]);
      }
    }
  };

  return (
    <div>
      <h3>DASHBOARD ({filteredDashboardOrders.length})</h3>
      <table>
        <thead>
          <tr>
            {dashboardTableHeaders.map((header) => {
              return (
                <ColumnHeaderCell
                  sortColumns={sortColumns}
                  header={header}
                  key={header.index}
                />
              );
            })}
          </tr>
          <ColumnFilters
            dashboardTableHeaders={dashboardTableHeaders}
            filterData={filterData}
          />
        </thead>
        <tbody>
          {filteredDashboardOrders.map((order) => {
            return (
              <React.Fragment key={order.id}>
                {order.child ? (
                  <></>
                ) : (
                  <DashboardOrderRow
                    key={order._id}
                    order={order}
                    deleteOrder={deleteOrder}
                    displayOrderChildren={displayOrderChildren}
                    updateDesignComplete={updateDesignComplete}
                    backToTriage={backToTriage}
                    dashboardOrders={dashboardOrders}
                    setDashboardOrders={setDashboardOrders}
                  >
                    {order.displaySameAsChildren ? (
                      <>
                        {order.sameasChildren.map((child) => {
                          return (
                            <OrderChild
                              order={order}
                              child={child}
                              key={child}
                            />
                          );
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                  </DashboardOrderRow>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
