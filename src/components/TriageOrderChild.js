import React from 'react';

import './OrderChildren.css'

function TriageOrderChild(props) {
  const { order, child, removeChild } = props;
  
  return (
    <tr className='childrenRow'>
      <td><button onClick={() => removeChild(order, child)} className='removeChildBtn' title='Remove Child'>X</button></td>
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

export default TriageOrderChild;
