import React from 'react';

function ColumnHeaderCell(props) {
    const { sortColumns, header } = props;

    return (
        <td key={header.name} onClick={() => sortColumns(header)} className={`tdheader noselect ${header.classes}`}>
            <div className='headerName'>
                {header.displayName}
            </div>
            <div className='arrow'>
                {header.sortAsc ? ' ▲' : ''}
                {header.sortDesc ? ' ▼' : ''}
            </div>
        </td>
    )
}

export default ColumnHeaderCell;
