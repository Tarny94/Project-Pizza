import * as React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

type iProp = {
  size?: "small" | "medium";
  name?: string;
  tableware?: boolean;
  setTableware?: any;
};

export default function RadioButton({
  size,
  name,
  tableware,
  setTableware,
}: iProp) {
  return (
    <div>
      <FormControlLabel
        label={name ? name : ""}
        control={
          <Radio
            size={size ? size : "small"}
            name={name}
            checked={tableware}
            onClick={() => {
              if (tableware) {
                setTableware && setTableware(false);
              } else {
                setTableware && setTableware(true);
              }
            }}
          />
        }
      />
    </div>
  );
}
