import React from 'react';

import './OrderChildren.css'

function OrderChildren(props) {
  const { order, child, removeChild } = props;
  
  return (
    <tr className='childrenRow'>
      <td></td>
      <td>{child.customer}</td>
      <td>{child.stylenumber}</td>
      <td>{child.triageowner}</td>
      <td>{child.owner}</td>
      <td>{child.workload}</td>
      <td></td>
      <td>{child.salesorder}</td>
      <td>{child.solineitem}</td>
      <td>{child.sameas}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default OrderChildren;
