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
import AddLinkIcon from "@mui/icons-material/AddLink";
import { useNavigate } from "react-router-dom";
export default function CustomModal() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Open the modal when the component mounts
    setOpen(true);
  }, []);

  const handleClose = () => {
    // Close the modal
    setOpen(false);
    navigate({
      pathname: "/AdvertismentAdd",
    });
  };

  return (
    <>
      <AlertDialog
        text=""
        setOpen={setOpen}
        open={open}
        title={"آگهی خود را منتشر کنید"}
        buttonTitle={"ثبت آگهی"}
        handleClose={handleClose}
      >
        <AddLinkIcon
          sx={{ color: "#93c47d", width: "2.5em", height: "2.5em" }}
        />
      </AlertDialog>
    </>
  );
}

function AlertDialog(props) {
  const { text, children, open, title, buttonTitle, handleClose } = props;

  return (
    <React.Fragment>
      <Dialog
        key={1}
        sx={{ m: 0, p: 2, fontFamily: "IRANSans" }}
        fullWidth={true}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{ textAlign: "center", fontFamily: "IRANSans" }}
          id="alert-dialog-title"
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{ textAlign: "center", fontFamily: "IRANSans" }}
            id="alert-dialog-description"
          >
            {text}
          </DialogContentText>
          <DialogContent
            sx={{
              textAlign: "center",
              fontFamily: "IRANSans",
            }}
          >
            <DialogContentText>{children}</DialogContentText>
          </DialogContent>
        </DialogContent>
        <DialogActions className="text-center justify-content-center">
          <Button
            variant="outlined"
            sx={{ textAlign: "center", fontFamily: "IRANSans" }}
            onClick={handleClose}
            autoFocus
          >
            {buttonTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
