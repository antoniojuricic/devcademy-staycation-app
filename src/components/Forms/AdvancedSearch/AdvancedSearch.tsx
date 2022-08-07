import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./AdvancedSearch.module.css";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import SearchButton from "../SearchButton";
import { CheckInField } from "../CheckInField";
import { CheckOutField } from "../CheckOutField";
import { PersonField } from "../PersonField";
import { TypeField } from "../TypeField";

const AdvancedSearch = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [people, setPeople] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(checkIn);
    console.log(checkOut);
    console.log(people);
    console.log(type);
  }
  return (
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <CheckInField checkInValue={checkIn} setCheckInValue={setCheckIn} />
        <CheckOutField
          checkOutValue={checkOut}
          setCheckOutValue={setCheckOut}
        />
        <PersonField personValue={people} setPersonValue={setPeople} />
        <TypeField typeValue={type} setTypeValue={setType} />
        <SearchButton />
      </Box>
    </div>
  );
};

export default AdvancedSearch;
