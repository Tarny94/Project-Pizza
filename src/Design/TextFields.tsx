import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type iProp = {
  label?: string;
  variant?: "filled" | "outlined" | "standard";
  onChange?: any;
  required?: boolean;
  type?: "text" | "number" | "password";
};

export default function TextFields({
  variant,
  label,
  onChange,
  required,
  type,
}: iProp) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        required={required}
        type={type ? type : "text"}
        label={label ? label : "Outlined"}
        variant={variant ? variant : "outlined"}
        onChange={(e) => {
          e.target.value && onChange?.(e.target.value);
        }}
      />
    </Box>
  );
}
