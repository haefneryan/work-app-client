import { ColumnFilter } from "./ColumnFilter";
import { updateTriageComplete} from '../App';

export const COLUMNS = [
    {
        Header: 'Customer',
        accessor: 'customer'
    },
    {
        Header: 'Sales Order',
        Cell: '-'
    },
    {
        Header: 'SO Line Item',
        Cell: '-'
    },
    {
        Header: 'Style Number',
        accessor: 'stylenumber'
    },
    {
        Header: 'Triage Owner',
        accessor: 'triageowner'
    },
    {
        Header: 'Owner',
        accessor: 'owner'
    },
    {
        Header: 'Workload',
        accessor: 'workload',
        disableFilters: true
    },
    {
        Header: 'Build Time',
        accessor: 'buildtime',
        disableFilters: true
    },
    {
        Header: 'Triage Complete',
        accessor: 'triagecomplete',
        disableFilters: true,
        Cell: (row) => {
            return <button onClick={() => console.log(row)}>BUTTON</button>
        }
        // Cell: (row) => {
        //     return <button onClick={() => console.log(row.cell.row.values)}>BUTTON</button>
        // }
    },
    {
        Header: 'Design Complete',
        accessor: 'designcomplete',
        disableFilters: true
    },
    {
        Header: 'Due Date',
        accessor: 'duedate',
        disableFilters: true
    }
]
