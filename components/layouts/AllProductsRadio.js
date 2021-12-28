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

const AllProductsRadio = () => {
  const classes = useStyles();
  const [allProducts, setAllProducts] = useState("all products");

  return (
    <Fragment>
      <Grid item xs={12} className={classes.root}>
        <FormControl component="fieldset">
          <FormLabel component="legend" className="form_label">
            All products or some of them?
          </FormLabel>
          <RadioGroup
            aria-label="all products"
            value={allProducts}
            name="radio-buttons-group"
            onChange={(e) => handleChange(e, setAllProducts)}
          >
            <FormControlLabel
              value="all products"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#12B596",
                    },
                  }}
                />
              }
              label="All products"
            />
            <FormControlLabel
              value="selected products"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#12B596",
                    },
                  }}
                />
              }
              label="Products from selected collection"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Fragment>
  );
};

export default AllProductsRadio;
