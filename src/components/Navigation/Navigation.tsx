import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Staycation</Link>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/locations">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/my-places">My places</NavLink>
        </li>
        <li>
          <NavLink to="/my-bookings">My bookings</NavLink>
        </li>
      </ul>
      <div className={styles.logout} onClick={handleLogout}>
        Logout
      </div>
    </nav>
  );
};

export default Navigation;
