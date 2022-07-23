import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Staycation</div>
      <ul className={styles.links}>
        <li>Locations</li>
        <li>My places</li>
        <li>My bookings</li>
      </ul>
      <div className={styles.logout}>Logout</div>
    </nav>
  );
};

export default Navigation;
