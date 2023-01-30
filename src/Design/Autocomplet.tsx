import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
type iProp = {
  counties: Array<{ label: string; value: string }>;
  label?: string;
  onChange?: (e: string) => void;
};

export default function Autocomplet({ counties, label, onChange }: iProp) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(e, value) => {
        value && onChange?.(value?.value);
      }}
      options={counties}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
