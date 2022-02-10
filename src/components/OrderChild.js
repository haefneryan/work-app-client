import React from 'react';

import './OrderChildren.css'

function OrderChildren(props) {
  const { child } = props;

  return (
    <tr className='childrenRow'>
      <td></td>
      <td>{child.customer}</td>
      <td>{child.stylenumber}</td>
      <td>{child.triageowner}</td>
      <td>{child.owner}</td>
      <td>{child.workload}</td>
      <td>{child.buildtime}</td>
      <td>{child.salesorder}</td>
      <td>{child.solineitem}</td>
      <td>{child.sameas}</td>
      <td>{child.triagecomplete}</td>
      <td>{child.designcomplete}</td>
      <td>{child.duedate}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default OrderChildren;
