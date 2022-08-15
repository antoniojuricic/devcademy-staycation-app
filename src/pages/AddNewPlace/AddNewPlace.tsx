import NewPlaceForm from "../../components/Forms/NewPlaceForm/NewPlaceForm";
import styles from "./AddNewPlace.module.css";

const AddNewPlace = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Add new place</h4>
      <NewPlaceForm />
    </div>
  );
};

export default AddNewPlace;
