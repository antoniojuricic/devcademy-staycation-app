import { Box, Button, Modal } from "@mui/material";
import styles from "./MyPlaceDeleteModal.module.css";

type Props = {
    openModal: boolean;
    closeHandler: () => void;
    confirmDelete: (id: string) => void;
    id: string;
  };

const MyPlaceDeleteModal = (props: Props) => {
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
      <h5 className={styles.title}>Delete listing?</h5>
        <p>Are you sure you want to delete this listing? This action cannot be reversed.</p>
      <div
        style={{ display: "flex", justifyContent: "flex-end", gap: "5px" }}
      >
        <Button variant="text" onClick={props.closeHandler}>
          CANCEL
        </Button>
        <Button variant="text" onClick={() => props.confirmDelete(props.id)}>
          CONFIRM
        </Button>
      </div>
    </Box>
  </Modal>
  )
}

export default MyPlaceDeleteModal