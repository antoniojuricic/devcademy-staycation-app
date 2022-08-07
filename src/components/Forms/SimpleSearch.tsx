import React, { useState } from "react";
import Box from "@mui/material/Box";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import SearchButton from "./SearchButton";
import { LocationField } from "./LocationField";

const SimpleSearch = () => {
  const [location, setLocation] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(location);
  }
  return (
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <LocationField
          locationValue={location}
          setLocationValue={setLocation}
        />
        <SearchButton />
      </Box>
    </div>
  );
};

export default SimpleSearch;
