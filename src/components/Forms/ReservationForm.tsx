import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(guests);
    console.log(checkIn);
    console.log(checkOut);
  }
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
        label="Full name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <TextField
        id="email"
        label="Email address"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <TextField
        id="guests"
        type="number"
        label="Number of guests"
        variant="outlined"
        onChange={(e) => setGuests(e.target.value)}
        value={guests}
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
          label="Check in"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          onChange={(e) => setCheckIn(e.target.value)}
          value={checkIn}
        />
        <TextField
          id="check-out"
          label="Check out"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          onChange={(e) => setCheckOut(e.target.value)}
          value={checkOut}
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
