import { Link } from 'react-router-dom';
import classes from './Navbar.css'

function Navbar(props) {
    const { triageOrders, dashboardOrders, completedOrders } = props
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    {/* <li><Link to='/'>ALL ORDERS</Link></li> */}
                    <li><Link to='/'>TRIAGE ({triageOrders.length})</Link></li>
                    <li><Link to='/dashboard'>DASHBOARD ({dashboardOrders.length})</Link></li>
                    <li><Link to='/completed'>COMPLETED ({completedOrders.length})</Link></li>
                    <li><Link to='/create-new-order'>CREATE NEW ORDER</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
