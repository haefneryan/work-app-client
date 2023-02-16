import React, { useState, useEffect } from "react";
import ColumnFilters from "../components/layout/Table/ColumnFilters";

import OrderChild from "../components/OrderChild";
import { completedTableHeadersInitialState } from "../components/layout/Table/CompletedTableHeaders";
import { deleteOrder } from "../functions/orderStatusFunctions";

import "./Completed.css";
import "./AllOrders.css";
import ColumnHeaderCell from "../components/layout/Table/ColumnHeaderCell";
import CompletedOrderRow from "../components/CompletedOrderRow";

function Completed(props) {
  document.title = "Scheduling Tool - Completed";
  const { completedOrders, displayOrderChildren, backToDesign } = props;
  const [filteredCompletedOrders, setFilteredCompletedOrders] =
    useState(completedOrders);
  const [completedTableHeaders, setCompletedTableHeaders] = useState(
    completedTableHeadersInitialState
  );

  const filterData = (column) => {
    setCompletedTableHeaders(
      [...completedTableHeaders],
      (completedTableHeaders[column.target.id].filters =
        column.target.value.toLowerCase())
    );
  };

  useEffect(() => {
    let filteredInfo = completedOrders;
    completedTableHeaders.forEach((y) => {
      if (y.filterable === true && y.filters.length > 0) {
        filteredInfo = filteredInfo.filter((x) => {
          if (x[y.name].toLowerCase().includes(`${y.filters}`)) {
            return x;
          }
        });
      }
    });
    setFilteredCompletedOrders(filteredInfo);
  }, [completedTableHeaders]);

  const sortColumns = (header) => {
    if (header.sortable === true) {
      completedTableHeaders.forEach((value) => {
        if (value !== header) {
          value.sortAsc = false;
          value.sortDesc = false;
        }
      });

      // Sort Ascending
      if (header.sortAsc === false && header.sortDesc === false) {
        header.sortAsc = true;
        setFilteredCompletedOrders([
          ...filteredCompletedOrders.sort((a, b) => {
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
        setFilteredCompletedOrders([
          ...filteredCompletedOrders.sort((a, b) => {
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
        setFilteredCompletedOrders([
          ...filteredCompletedOrders.sort((a, b) => {
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
      <h3>COMPLETED ({filteredCompletedOrders.length})</h3>
      <table>
        <thead>
          <tr>
            {completedTableHeaders.map((header) => {
              return (
                <ColumnHeaderCell
                  header={header}
                  sortColumns={sortColumns}
                  key={header.index}
                />
              );
            })}
          </tr>
          <ColumnFilters
            completedTableHeaders={completedTableHeaders}
            filterData={filterData}
          />
        </thead>
        <tbody>
          {filteredCompletedOrders.map((order) => {
            return (
              <React.Fragment key={order.id}>
                {order.child ? (
                  <></>
                ) : (
                  <CompletedOrderRow
                    key={order._id}
                    order={order}
                    deleteOrder={deleteOrder}
                    displayOrderChildren={displayOrderChildren}
                    backToDesign={backToDesign}
                  >
                    {order.displaysameAsChildren ? (
                      <>
                        {order.sameAsChildren.map((child) => {
                          return <OrderChild order={order} child={child} />;
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                  </CompletedOrderRow>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Completed;
