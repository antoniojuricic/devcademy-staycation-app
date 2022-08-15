import { Link } from "react-router-dom";
import { MediumButton } from "../../components/Forms/MediumButton";
import styles from "./MyPlaces.module.css";

const MyPlaces = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <h4 className={styles.title}>My Places</h4>

        <Link to="/add-new-place">
          <MediumButton text="add new place" />
        </Link>
      </div>
    </div>
  );
};

export default MyPlaces;
