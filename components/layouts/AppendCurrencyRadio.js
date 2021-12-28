import { Fragment, useState } from "react";
import {
  Grid,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: '"Fira Sans", sans-serif',
    "& .form_label": {
      color: "#1D2C38",
      fontWeight: "700",
      fontSize: "18px",
    },
  },
});

const handleChange = (e, fn) => {
  fn(e.target.value);
};

const AppendCurrencyRadio = () => {
  const classes = useStyles();
  const [appendCurrency, setAppendCurrency] = useState("do not append");

  return (
    <Fragment>
      <Grid item xs={12} className={classes.root}>
        <FormControl component="fieldset">
          <FormLabel component="legend" className="form_label">
            Append currency parameter to product URL?
          </FormLabel>
          <RadioGroup
            aria-label="append currency"
            value={appendCurrency}
            name="radio-buttons-group"
            onChange={(e) => handleChange(e, setAppendCurrency)}
          >
            <FormControlLabel
              value="do not append"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#12B596",
                    },
                  }}
                />
              }
              label="Do Not append. (default, example: my-store.com/products/my-product)"
            />
            <FormControlLabel
              value="do append"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#12B596",
                    },
                  }}
                />
              }
              label="Do append. (example: my-store.com/products/my-product?currency=USD)"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Fragment>
  );
};

export default AppendCurrencyRadio;
