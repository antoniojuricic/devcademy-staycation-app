import { Box } from "@mui/material";
import { useState } from "react";
import { typesData } from "../../../data/typesData";
import { CancellationField } from "../CancellationField/CancellationField";
import { CategorizationInput } from "../CategorizationInput/CategorizationInput";
import { CustomInputField } from "../CustomInputField";
import { CustomSelectField } from "../CustomSelectField";
import { MediumButton } from "../MediumButton";
import styles from "./NewPlaceForm.module.css";

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
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  }

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
        currentValue={formValues.title}
        changeHandler={handleChange}
      />
      <CustomInputField
        type="text"
        id="subtitle"
        name="subtitle"
        label="Short description"
        currentValue={formValues.subtitle}
        changeHandler={handleChange}
      />
      <CustomInputField
        type="text"
        id="description"
        name="description"
        label="Long description"
        currentValue={formValues.description}
        changeHandler={handleChange}
        multiline
      />
      <CategorizationInput
        clickHandler={handleRatingClick}
        rating={formValues.categorization}
      />
      <CustomSelectField
        id="type"
        name="type"
        label="What type of accommodation?"
        selectOptions={typesData}
        currentValue={formValues.type}
        changeHandler={handleChange}
        shrink={false}
      />
      <CustomInputField
        type="number"
        id="personCount"
        name="personCount"
        label="Capacity"
        currentValue={formValues.personCount}
        changeHandler={handleChange}
      />
      <CustomInputField
        type="number"
        id="price"
        name="price"
        label="Price"
        currentValue={formValues.price}
        changeHandler={handleChange}
      />
      <CustomInputField
        type="text"
        id="location"
        name="location"
        label="Location"
        currentValue={formValues.location}
        changeHandler={handleChange}
      />
      <CustomInputField
        type="text"
        id="postalCode"
        name="postalCode"
        label="Postal code"
        currentValue={formValues.postalCode}
        changeHandler={handleChange}
      />
      <CustomInputField
        type="text"
        id="imageURL"
        name="imageURL"
        label="Listing image URL"
        currentValue={formValues.imageURL}
        changeHandler={handleChange}
      />
      <CancellationField
        changeHandler={handleCheck}
        currentValue={formValues.freeCancellation}
        name="freeCancellation"
      />
      <MediumButton text="add new place" />
    </Box>
  );
};

export default NewPlaceForm;
