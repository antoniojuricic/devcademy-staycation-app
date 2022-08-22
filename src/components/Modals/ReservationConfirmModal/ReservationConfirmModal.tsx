import { Box, Button, Modal } from "@mui/material";
import styles from "./ReservationConfirmModal.module.css";

type Props = {
  openModal: boolean;
  closeHandler: () => void;
  confirmBooking: () => void;
  accData: any;
  bookingData: any;
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
          {props.bookingData.personCount} guests <br />
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
