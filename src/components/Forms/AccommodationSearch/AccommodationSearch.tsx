import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./AccommodationSearch.module.css";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import SearchButton from "../SearchButton";
import { CustomSelectField } from "../CustomSelectField";
import { CustomDateField } from "../CustomDateField";
import { PersonField } from "../PersonField";
import KingBedIcon from "@mui/icons-material/KingBed";
import HotelIcon from "@mui/icons-material/Hotel";

const AccommodationSearch = () => {
  const [formValues, setFormValues] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    people: "",
    type: "",
  });

  const handleChange = (event: any) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formValues);
  }

  const typesData = [
    { name: "room", value: "Room" },
    { name: "apartment", value: "Apartment" },
  ];
  const locationsData = [
    { name: "london", value: "London" },
    { name: "split", value: "Split" },
  ];

  return (
    <div className={styles.container}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <CustomSelectField
          id="location"
          name="location"
          label="Where are you going?"
          selectOptions={locationsData}
          currentValue={formValues.location}
          changeHandler={handleChange}
          icon={<KingBedIcon />}
        />
        <CustomDateField
          id="checkIn"
          name="checkIn"
          label="Check in"
          currentValue={formValues.checkIn}
          changeHandler={handleChange}
        />
        <CustomDateField
          id="checkOut"
          name="checkOut"
          label="Check out"
          currentValue={formValues.checkOut}
          changeHandler={handleChange}
        />

        <PersonField
          currentValue={formValues.people}
          changeHandler={handleChange}
        />

        <CustomSelectField
          id="type"
          name="type"
          label="What type of accommodation?"
          selectOptions={typesData}
          currentValue={formValues.type}
          changeHandler={handleChange}
          icon={<HotelIcon />}
        />

        <SearchButton />
      </Box>
    </div>
  );
};

export default AccommodationSearch;
