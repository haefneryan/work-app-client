import React from 'react';

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    return (
        <span>
            <div>
                <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} placeholder='Search...'/>
            </div>
        </span>
    )
}
