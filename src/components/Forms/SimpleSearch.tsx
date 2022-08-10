import React, { useState } from "react";
import Box from "@mui/material/Box";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import SearchButton from "./SearchButton";
import { CustomSelectField } from "./CustomSelectField";
import KingBedIcon from "@mui/icons-material/KingBed";

const SimpleSearch = () => {
  const [formValues, setFormValues] = useState({
    location: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formValues);
  }

  const handleChange = (event: any) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const locationsData = [
    { name: "london", value: "London" },
    { name: "split", value: "Split" },
  ];

  return (
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
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
        <SearchButton />
      </Box>
    </div>
  );
};

export default SimpleSearch;
