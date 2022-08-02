import styles from "./Header.module.css";
import image from "../../assets/header.png";

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={styles.header}>
      <div className={styles.overlay}></div>
        <div className={styles.textContainer}>
          <h1>Enjoy your travels</h1>
          <h2>with Staycation and collect rewards</h2>
          <h3>Book now & save 10% or more today</h3>
      </div>
    </div>
  );
};

export default Header;
