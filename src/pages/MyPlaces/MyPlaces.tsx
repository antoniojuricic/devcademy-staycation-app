import { Grid } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyPlaceCard } from "../../components/Cards/MyPlaceCard/MyPlaceCard";
import { MediumButton } from "../../components/Forms/MediumButton";
import MyPlaceDeleteModal from "../../components/Modals/MyPlaceDeleteModal/MyPlaceDeleteModal";
import useAxios from "../../hooks/useAxios";
import styles from "./MyPlaces.module.css";

const MyPlaces = () => {
  const { response, loading, error } = useAxios({
    url: "/Accomodations",
    method: "get",
  });

  const [openModal, setOpenModal] = useState(false);
  const [deleteID, setDeleteID] = useState("");
  const navigate = useNavigate();

  const { response: deleteResponse, sendData: sendDelete } = useAxios({
    url: "/Accomodations/" + deleteID,
    method: "delete",
  });

  const handleEdit = (event: React.MouseEvent<HTMLElement>, id: string) => {
    var place = response?.data.find((obj: any) => {
      return obj.id === id;
    });

    navigate("/add-new-place", { state: { place: place } });
  };

  const handleDelete = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setDeleteID(id);
    setOpenModal(true);
  };

  const deletePost = () => {
    sendDelete();
    setOpenModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <h4 className={styles.title}>My Places</h4>

        <Link to="/add-new-place">
          <MediumButton text="add new place" />
        </Link>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <Grid container spacing={3}>
        {!loading &&
          !error &&
          response?.data.map((place: any) => (
            <Grid item xs={3} key={place.id}>
              <MyPlaceCard
                id={place.id}
                title={place.title}
                location={place.location?.name}
                image={place.imageUrl}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </Grid>
          ))}
      </Grid>
      <MyPlaceDeleteModal
        openModal={openModal}
        closeHandler={() => setOpenModal(false)}
        id={deleteID}
        confirmDelete={deletePost}
      />
    </div>
  );
};

export default MyPlaces;
