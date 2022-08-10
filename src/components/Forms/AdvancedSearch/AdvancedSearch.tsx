import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./AdvancedSearch.module.css";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import SearchButton from "../SearchButton";
import { CustomDateField } from "../CustomDateField";
import { PersonField } from "../PersonField";
import { CustomSelectField } from "../CustomSelectField";
import KingBedIcon from "@mui/icons-material/KingBed";
import { KingBed } from "@mui/icons-material";
import HotelIcon from "@mui/icons-material/Hotel";

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

  const typesData = [{ name: "room", value: "Room" }];

  return (
    <div>
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

export default AdvancedSearch;
