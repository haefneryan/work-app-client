import React from 'react';

import EngineerSelect from '../../selects/EngineerSelect';
import './ColumnFilters.css'

function ColumnFilters(props) {
  const { triageTableHeaders, dashboardTableHeaders, completedTableHeaders, filterData, triageOrders } = props;
  let tableHeaders;
  let index = 0;

  if (document.URL.endsWith('/')) {
    tableHeaders = triageTableHeaders
  } else if (document.URL.endsWith('dashboard')) {
    tableHeaders = dashboardTableHeaders
  } else if (document.URL.endsWith('/completed')) {
    tableHeaders = completedTableHeaders

  }

  return (
    <tr>
      {tableHeaders.map(column => {
        {index++}
        return (
          <td key={column.name} className='filter'>
            {column.filterable ? (
              ((column.filterableType === 'select') ? (
                <select name={column.name.toLowerCase().replace(/\s/g, '')} id={index-1} onChange={(column) => filterData(column)} className='columnSelectFilter'>
                  <option value={''} >Search...</option>
                  <EngineerSelect />
                </select>
              ) : (
              <input type='text' name={column.name.toLowerCase().replace(/\s/g, '')} id={index-1} onChange={(column) => filterData(column)} className='columnSearchFilter' placeholder={'Search...'}/>
              ))
            ) : (
              <input disabled className='columnSearchFilter disabled'/>
            )
            }
          </td>
        )
      })}
    </tr>
  );
}

export default ColumnFilters;
