import React, { useEffect, useState } from "react";
import ColumnFilters from "../components/layout/Table/ColumnFilters";
import TriageOrderRow from "../components/TriageOrderRow";
import TriageOrderChild from "../components/TriageOrderChild";

import { triageTableHeadersInitialState } from "../components/layout/Table/TriageTableHeaders";
import { deleteOrder } from "../functions/orderStatusFunctions";
import ColumnHeaderCell from "../components/layout/Table/ColumnHeaderCell";

import "./Triage.css";

function Triage(props) {
  document.title = "Scheduling Tool - Triage";
  const {
    triageOrders,
    setTriageOrders,
    updateSameAs,
    removeChild,
    displayOrderChildren,
    updateTriageComplete,
  } = props;
  const [filteredTriageOrders, setFilteredTriageOrders] =
    useState(triageOrders);
  const [triageTableHeaders, setTriageTableHeaders] = useState(
    triageTableHeadersInitialState
  );

  const filterData = (column) => {
    setTriageTableHeaders(
      [...triageTableHeaders],
      (triageTableHeaders[column.target.id].filters =
        column.target.value.toLowerCase())
    );
  };

  useEffect(() => {
    let filteredInfo = triageOrders;
    triageTableHeaders.forEach((y) => {
      if (y.filterable === true && y.filters.length > 0) {
        filteredInfo = filteredInfo.filter((x) => {
          if (x[y.name].toLowerCase().includes(`${y.filters}`)) {
            return x;
          }
        });
      }
    });
    setFilteredTriageOrders(filteredInfo);
  }, [triageTableHeaders]);

  const sortColumns = (header) => {
    if (header.sortable === true) {
      triageTableHeaders.forEach((value) => {
        if (value !== header) {
          value.sortAsc = false;
          value.sortDesc = false;
        }
      });

      // Sort Ascending
      if (header.sortAsc === false && header.sortDesc === false) {
        header.sortAsc = true;
        setFilteredTriageOrders([
          ...filteredTriageOrders.sort((a, b) => {
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
        setFilteredTriageOrders([
          ...filteredTriageOrders.sort((a, b) => {
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
        setFilteredTriageOrders([
          ...filteredTriageOrders.sort((a, b) => {
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
      <h3>TRIAGE ({filteredTriageOrders.length})</h3>
      <table>
        <thead>
          <tr>
            {triageTableHeaders.map((header, index) => {
              return (
                <ColumnHeaderCell
                  sortColumns={sortColumns}
                  header={header}
                  key={index}
                />
              );
            })}
          </tr>
          <ColumnFilters
            triageTableHeaders={triageTableHeaders}
            filterData={filterData}
            triageOrders={triageOrders}
          />
        </thead>
        <tbody>
          {filteredTriageOrders.map((order) => {
            return (
              <React.Fragment key={order.id}>
                {order.child ? (
                  <></>
                ) : (
                  <TriageOrderRow
                    key={order.id}
                    order={order}
                    updateSameAs={updateSameAs}
                    updateTriageComplete={updateTriageComplete}
                    deleteOrder={deleteOrder}
                    displayOrderChildren={displayOrderChildren}
                    triageOrders={triageOrders}
                    setTriageOrders={setTriageOrders}
                  >
                    {order.displaySameAsChildren ? (
                      <>
                        {order.sameAsChildren.map((child) => {
                          return (
                            <TriageOrderChild
                              order={order}
                              child={child}
                              removeChild={removeChild}
                              key={order.id}
                            />
                          );
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                  </TriageOrderRow>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Triage;
