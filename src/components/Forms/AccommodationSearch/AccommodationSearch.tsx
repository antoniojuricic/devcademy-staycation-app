import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import styles from "./AccommodationSearch.module.css";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import SearchButton from "../SearchButton";
import { CustomSelectField } from "../CustomSelectField";
import { CustomDateField } from "../CustomDateField";
import { PersonField } from "../PersonField";
import KingBedIcon from "@mui/icons-material/KingBed";
import HotelIcon from "@mui/icons-material/Hotel";
import { typesData } from "../../../data/typesData";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

type Locations = {
  name: string;
  value: string;
};

const AccommodationSearch = () => {
  const { response, loading, error } = useAxios({
    url: "/location",
    method: "get",
  });

  const [locationData, setLocationData] = useState<Locations[]>([]);

  useEffect(() => {
    if (response) {
      let locations = response.data.map((location: any) => ({
        name: location.id,
        value: location.name,
      }));
      setLocationData(locations);
    }
  }, [response]);

  const [formValues, setFormValues] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    people: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    var result = locationData.find((obj: any) => {
      return obj.value === formValues.location;
    });
    navigate("/location", {
      state: { location: result, formData: formValues },
    });
  };

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
          selectOptions={locationData}
          value={formValues.location}
          onChange={handleChange}
          icon={<KingBedIcon />}
          style={{ width: 200 }}
        />
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
          style={{ width: 200 }}
        />
        <SearchButton />
      </Box>
    </div>
  );
};

export default AccommodationSearch;
