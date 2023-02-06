import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { log } from "console";

type iProp = {
  checked?: boolean;
  defaultChecked?: boolean;
  disable?: boolean;
  label?: string;
  tableware?: boolean;
  setTableware?: any;
};

export default function CheckBox({
  checked,
  defaultChecked,
  disable,
  label,
}: iProp) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={defaultChecked}
            disabled={disable}
            checked={checked}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}
