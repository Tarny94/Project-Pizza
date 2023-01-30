import * as React from "react";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type iProp = {
  tips?: number;
  setTips?: any;
};

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function TipsRadioButtons({ tips, setTips }: iProp) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Tips for delivery
      </FormLabel>
      <RadioGroup row name="use-radio-group" defaultValue="nothing">
        <MyFormControlLabel
          value="nothing"
          label="Thank's"
          control={
            <Radio
              onClick={() => {
                setTips(0);
              }}
            />
          }
        />
        <MyFormControlLabel
          value="one"
          label="$1"
          control={
            <Radio
              onClick={() => {
                setTips(1);
              }}
            />
          }
        />
        <MyFormControlLabel
          value="three"
          label="$3"
          control={
            <Radio
              onClick={() => {
                setTips(3);
              }}
            />
          }
        />

        <MyFormControlLabel
          value="five"
          label="$5"
          control={
            <Radio
              onClick={() => {
                setTips(5);
              }}
            />
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
