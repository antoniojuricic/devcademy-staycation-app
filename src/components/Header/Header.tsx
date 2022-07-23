import styles from "./Header.module.css";
import header from "../../assets/header.png";

const Header = () => {
  return (
    <img className={styles.header} src={header} />
  );
};

export default Header;
