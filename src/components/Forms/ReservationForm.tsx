import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const ReservationForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    guests: "",
    checkIn: "",
    checkOut: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formValues);
  }

  const handleChange = (event: any) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        name="name"
        label="Full name"
        variant="outlined"
        onChange={handleChange}
        value={formValues.name}
      />
      <br />
      <TextField
        id="email"
        name="email"
        label="Email address"
        variant="outlined"
        onChange={handleChange}
        value={formValues.email}
      />
      <br />
      <TextField
        id="guests"
        name="guests"
        type="number"
        label="Number of guests"
        variant="outlined"
        onChange={handleChange}
        value={formValues.guests}
      />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "10px",
        }}
      >
        <TextField
          id="check-in"
          name="checkIn"
          label="Check in"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          onChange={handleChange}
          value={formValues.checkIn}
        />
        <TextField
          id="check-out"
          name="checkOut"
          label="Check out"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          onChange={handleChange}
          value={formValues.checkOut}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        sx={{
          background: "#40e0d0",
          color: "#ffffff",
          padding: "8px 50px",
          width: "227px",
          marginTop: "50px",
        }}
      >
        BOOK YOUR STAY
      </Button>
    </Box>
  );
};

export default ReservationForm;
