import { Box, Button, Modal } from "@mui/material";
import styles from "./ReservationConfirmModal.module.css";

export interface AccData {
    id:               string;
    title:            string;
    subtitle:         string;
    description:      string;
    shortDescription: string;
    type:             string;
    categorization:   number;
    personCount:      number;
    imageUrl:         string;
    freeCancelation:  boolean;
    price:            number;
    location:         Location;
    locationID:       string;
    capacity:         number;
}

export interface Location {
    id:         string;
    name:       string;
    imageUrl:   string;
    postalCode: number;
    properties: number;
}

type bookingData = {
    name: string;
    email: string;
    guests: string;
    checkIn: string;
    checkOut: string;
}

type Props = {
  openModal: boolean;
  closeHandler: () => void;
  confirmBooking: () => void;
  accData: AccData;
  bookingData: bookingData;
};

const ReservationConfirmModal = (props: Props) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal open={props.openModal} onClose={props.closeHandler}>
      <Box sx={style}>
        <h5 className={styles.title}>Confirm booking</h5>
        <div className={styles.info}>
          {props.accData.title}
          <br />
          {props.bookingData.guests} guests <br />
          {props.bookingData.checkIn} - {props.bookingData.checkOut} <br />
          {props.accData.type} <br />
          {props.accData.location.name} <br />
          EUR {props.accData.price}
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "5px" }}
        >
          <Button variant="text" onClick={props.closeHandler}>
            CANCEL
          </Button>
          <Button variant="text" onClick={props.confirmBooking}>
            CONFIRM
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ReservationConfirmModal;
