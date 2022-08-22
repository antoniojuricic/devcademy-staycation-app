import { Box, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import ReservationConfirmModal from "../Modals/ReservationConfirmModal/ReservationConfirmModal";

const ReservationForm = ({ data }: { data: any }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    guests: "",
    checkIn: "",
    checkOut: "",
  });

  const [formValid, setFormValid] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [msg, setMsg] = useState("");

  const { response, error, sendData } = useAxios({
    url: "/Reservation",
    method: "post",
    data: {
      email: formValues.email,
      accomodationId: data.id,
      checkIn: formValues.checkIn + "T00:00:00.000Z",
      checkOut: formValues.checkOut + "T00:00:00.000Z",
      personCount: formValues.guests,
      confirmed: true,
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !isValidEmail(formValues.email) ||
      !isDateValid(formValues.checkIn) ||
      !isDateValid(formValues.checkOut)
    )
      setFormValid(false);
    else setOpenModal(true);
  };

  useEffect(() => {
    setOpenModal(false);
    if (error) {
      setMsg("There was an error.");
    } else if (response?.statusText == "Created") {
      setMsg("Your reservation was created.");
    }
  }, [error, response]);

  const handleChange = (event: any) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    setFormValid(true);
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isDateValid = (date: string) => {
    let now = new Date();
    return date > now.toISOString().substring(0, 10);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <>
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
          inputProps={{ maxLength: 300 }}
        />
        <br />
        <TextField
          id="email"
          name="email"
          label="Email address"
          variant="outlined"
          onChange={handleChange}
          value={formValues.email}
          inputProps={{ maxLength: 100 }}
          error={!formValid}
          helperText={!formValid && "Invalid email format"}
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
            error={!formValid && !isDateValid(formValues.checkIn)}
            helperText={
              !formValid &&
              !isDateValid(formValues.checkIn) &&
              "Date must be in the future"
            }
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
            error={!formValid && !isDateValid(formValues.checkOut)}
            helperText={
              !formValid &&
              !isDateValid(formValues.checkOut) &&
              "Date must be in the future"
            }
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
        <p style={{ margin: "20px", fontSize: "15px" }}>{msg}</p>
      </Box>

      <ReservationConfirmModal
        openModal={openModal}
        closeHandler={handleClose}
        accData={data}
        bookingData={formValues}
        confirmBooking={sendData}
      />
    </>
  );
};

export default ReservationForm;
