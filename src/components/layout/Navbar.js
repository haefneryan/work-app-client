import { NavLink } from "react-router-dom";
import classes from "./Navbar.css";

function Navbar(props) {
  const { triageOrders, dashboardOrders, completedOrders } = props;
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {/* <li><Link to='/'>ALL ORDERS</Link></li> */}
          <li>
            <NavLink to="/triage">
              <p>TRIAGE ({triageOrders.length})</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <p>DASHBOARD ({dashboardOrders.length})</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed">
              <p>COMPLETED ({completedOrders.length})</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-new-order">
              <p>CREATE NEW ORDER</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
