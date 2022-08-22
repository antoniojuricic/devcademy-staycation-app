import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./AdvancedSearch.module.css";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import SearchButton from "../SearchButton";
import { CustomDateField } from "../CustomDateField";
import { PersonField } from "../PersonField";
import { CustomSelectField } from "../CustomSelectField";
import HotelIcon from "@mui/icons-material/Hotel";
import { typesData } from "../../../data/typesData";

const AdvancedSearch = () => {
  const [formValues, setFormValues] = useState({
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
  }

  return (
    <div className={styles.form}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <CustomDateField
          id="checkIn"
          name="checkIn"
          label="Check in"
          value={formValues.checkIn}
          onChange={handleChange}
        />
        <CustomDateField
          id="checkOut"
          name="checkOut"
          label="Check out"
          value={formValues.checkOut}
          onChange={handleChange}
        />

        <PersonField value={formValues.people} onChange={handleChange} />

        <CustomSelectField
          id="type"
          name="type"
          label="What type of accommodation?"
          selectOptions={typesData}
          value={formValues.type}
          onChange={handleChange}
          icon={<HotelIcon />}
        />
        <SearchButton />
      </Box>
    </div>
  );
};

export default AdvancedSearch;
