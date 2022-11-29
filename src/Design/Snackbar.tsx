import React from "react";
import { Snackbar as SnackbarMUI } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type IProp = {
  open: boolean;
  setOpen?: any;
  severity?: "error" | "warning" | "info" | "success";
  duration: number;
  title?: string;
};

const Snackbar = ({ open, setOpen, severity, duration, title }: IProp) => {
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
    <SnackbarMUI open={open} autoHideDuration={duration} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%", fontSize: 20 }}
      >
        {title}
      </Alert>
    </SnackbarMUI>
  );
};

export default Snackbar;
