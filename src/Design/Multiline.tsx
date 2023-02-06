import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type iProp = {
  label?: string;
  onChange?: any;
  maxRow?: number;
  variant?: "filled" | "outlined" | "standard";
  rows?: number;
};

export default function Multiline({ label, onChange, variant, rows }: iProp) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-multiline-static"
        label={label}
        multiline
        rows={rows}
        variant={variant}
        onChange={(e: any) => {
          e.target.value && onChange(e.target.value);
        }}
      />
    </Box>
  );
}
