import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
} from "@mui/material";
import React, { useEffect } from "react";

export default function CustomModal() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    handleClickOpen();
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <AlertDialog
        text="test description"
        setOpen={setOpen}
        open={open}
        title={""}
        buttonTitle={"ثبت نام"}
      >
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button> */}
      </AlertDialog>
    </>
  );
}

function AlertDialog({ text, children, setOpen, open, title, buttonTitle }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {children}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            {buttonTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
