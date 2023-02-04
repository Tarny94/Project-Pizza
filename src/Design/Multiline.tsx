import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type iProp = {
  label?: string;
  onChange?: any;
  maxRow?: number;
  variant?: "filled" | "outlined" | "standard";
};

export default function Multiline({ label, onChange, maxRow, variant }: iProp) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-multiline-flexible"
          label={label}
          multiline
          maxRows={maxRow}
          variant={variant}
          onChange={(e: any) => {
            e.target.value && onChange(e.target.value);
          }}
        />
      </div>
    </Box>
  );
}
