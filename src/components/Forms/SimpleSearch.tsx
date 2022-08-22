import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import SearchButton from "./SearchButton";
import { CustomSelectField } from "./CustomSelectField";
import KingBedIcon from "@mui/icons-material/KingBed";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

type Locations = {
  name: string;
  value: string;
};

const SimpleSearch = () => {
  const [formValues, setFormValues] = useState({
    location: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    var result = locationData.find((obj: any) => {
      return obj.value === formValues.location;
    });
    navigate("/location", { state: { location: result } });
  }

  const handleChange = (event: any) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const { response, loading, error } = useAxios({
    url: "/location",
    method: "get",
  });

  const [locationData, setLocationData] = useState<Locations[]>([]);

  useEffect(() => {
    if (response?.data) {
      let locations = response?.data.map((location: any) => ({
        name: location.id,
        value: location.name,
      }));
      setLocationData(locations);
    }
  }, [response]);

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
          selectOptions={locationData}
          value={formValues.location}
          onChange={handleChange}
          icon={<KingBedIcon />}
          style={{ width: 200 }}
        />
        <SearchButton />
      </Box>
    </div>
  );
};

export default SimpleSearch;
