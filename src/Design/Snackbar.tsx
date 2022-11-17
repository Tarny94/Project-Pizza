import React from "react";
import { Snackbar as SnackbarMUI } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type IProp = {
  open: boolean;
  fail: boolean;
  setOpen: any;
};

const Snackbar = ({ open, setOpen, fail }: IProp) => {
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <SnackbarMUI open={open} autoHideDuration={1000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={fail ? "warning" : "success"}
        sx={{ width: "100%", fontSize: 20 }}
      >
        {fail ? "Warning 😧" : "Succesfull Register 😀"}
      </Alert>
    </SnackbarMUI>
  );
};

export default Snackbar;
