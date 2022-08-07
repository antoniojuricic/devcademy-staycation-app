import AdvancedSearch from "../../components/Forms/AdvancedSearch/AdvancedSearch";
import styles from "./Favorites.module.css";
const Favorites = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Homes guests love</h4>
      <AdvancedSearch />
    </div>
  );
};

export default Favorites;
