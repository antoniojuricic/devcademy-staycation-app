import SimpleSearch from "../../components/Forms/SimpleSearch";
import styles from "./Locations.module.css";

export const Locations = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>All locations</h4>
      <SimpleSearch />
    </div>
  );
};
