import { Box } from "@mui/material";
import { useState } from "react";
import { typesData } from "../../../data/typesData";
import useAxios from "../../../hooks/useAxios";
import { CancellationField } from "../CancellationField/CancellationField";
import { CategorizationInput } from "../CategorizationInput/CategorizationInput";
import { CustomInputField } from "../CustomInputField";
import { CustomSelectField } from "../CustomSelectField";
import { MediumButton } from "../MediumButton";
import styles from "./NewPlaceForm.module.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NewPlaceForm = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    subtitle: "",
    description: "",
    type: "",
    categorization: 0,
    personCount: "",
    freeCancellation: false,
    imageURL: "",
    price: "",
    location: "",
    postalCode: "",
  });

  const [formError, setFormError] = useState(false);
  const [postError, setPostError] = useState(false);
  const [editID, setEditID] = useState("");

  const location = useLocation();
  const state = location.state as any;

  useEffect(() => {
    if (location.state != null && state.place != "") {
      setEditID(state.place.id);
      setFormValues({
        ...formValues,
        ...state.place,
        location: state.place.location.name,
        postalCode: state.place.location.postalCode,
        imageURL: state.place.imageUrl,
        freeCancellation: state.place.freeCancelation,
        personCount: state.place.capacity,
      });
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleRatingClick = (
    event: React.MouseEvent<HTMLElement>,
    rating: number
  ) => {
    setFormValues({ ...formValues, categorization: rating });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, freeCancellation: event.target.checked });
  };

  const { response, error, sendData } = useAxios({
    url: "/Accomodations" + (editID && "/" + editID),
    method: editID ? "put" : "post",
    data: {
      id: editID,
      title: formValues.title,
      subtitle: formValues.subtitle,
      description: formValues.description,
      type: formValues.type,
      categorization: formValues.categorization,
      personCount: formValues.personCount,
      imageUrl: formValues.imageURL,
      freeCancelation: formValues.freeCancellation,
      price: formValues.price,
      location: {
        name: formValues.location,
        postalCode: formValues.postalCode,
        imageUrl: "",
        properties: 0,
      },
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      formValues.title.length == 0 ||
      !formValues.categorization ||
      formValues.location.length == 0 ||
      formValues.price.length == 0
    )
      setFormError(true);
    else {
      sendData();
    }
  };

  useEffect(() => {
    if (error) setPostError(true);
    else if (response) {
      console.log(response);
    }
  }, [error, response]);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <CustomInputField
        type="text"
        id="title"
        name="title"
        label="Listing name"
        value={formValues.title}
        onChange={handleChange}
        inputProps={{ maxLength: 100 }}
        required={true}
        error={formError && formValues.title.length == 0}
        helperText={
          formError && formValues.title.length == 0 ? "Title is required" : ""
        }
      />
      <CustomInputField
        type="text"
        id="subtitle"
        name="subtitle"
        label="Short description"
        value={formValues.subtitle}
        onChange={handleChange}
        inputProps={{ maxLength: 200 }}
      />
      <CustomInputField
        type="text"
        id="description"
        name="description"
        label="Long description"
        value={formValues.description}
        onChange={handleChange}
        multiline
      />
      <CategorizationInput
        clickHandler={handleRatingClick}
        rating={formValues.categorization}
        error={formError && formValues.categorization == 0}
      />
      <CustomSelectField
        id="type"
        name="type"
        label="What type of accommodation?"
        selectOptions={typesData}
        value={formValues.type}
        onChange={handleChange}
        shrink={false}
        error={formError && formValues.type.length == 0}
        helperText={
          formError && formValues.type.length == 0 ? "Type is required" : ""
        }
      />
      <CustomInputField
        type="number"
        id="personCount"
        name="personCount"
        label="Capacity"
        value={formValues.personCount}
        onChange={handleChange}
        inputProps={{ min: 1 }}
      />
      <CustomInputField
        type="number"
        id="price"
        name="price"
        label="Price"
        value={formValues.price}
        onChange={handleChange}
        required
        error={formError && formValues.price.length == 0}
        helperText={
          formError && formValues.price.length == 0
            ? "Location is required"
            : ""
        }
      />
      <CustomInputField
        type="text"
        id="location"
        name="location"
        label="Location"
        value={formValues.location}
        onChange={handleChange}
        inputProps={{ maxLength: 150 }}
        required={true}
        error={formError && formValues.location.length == 0}
        helperText={
          formError && formValues.location.length == 0
            ? "Location is required"
            : ""
        }
      />
      <CustomInputField
        type="text"
        id="postalCode"
        name="postalCode"
        label="Postal code"
        value={formValues.postalCode}
        onChange={handleChange}
      />
      <CustomInputField
        type="text"
        id="imageURL"
        name="imageURL"
        label="Listing image URL"
        value={formValues.imageURL}
        onChange={handleChange}
      />
      <CancellationField
        onChange={handleCheck}
        value={formValues.freeCancellation}
        name="freeCancellation"
        defaultChecked={true}
      />
      <MediumButton text="add new place" />
      {postError && <p>An error occured while adding your place.</p>}
    </Box>
  );
};

export default NewPlaceForm;
