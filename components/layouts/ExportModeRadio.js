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

const ExportModeRadio = () => {
  const classes = useStyles();
  const [exportMode, setExportMode] = useState("export all variants");
  return (
    <Fragment>
      <Grid item xs={12} className={classes.root}>
        <FormControl component="fieldset">
          <FormLabel component="legend" className="form_label">
            Export mode
          </FormLabel>
          <RadioGroup
            aria-label="export mode"
            name="radio-buttons-group"
            value={exportMode}
            onChange={(e) => handleChange(e, setExportMode)}
          >
            <FormControlLabel
              value="export all variants"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#12B596",
                    },
                  }}
                />
              }
              label="Export all variants of a product"
            />
            <FormControlLabel
              value="export only one"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#12B596",
                    },
                  }}
                />
              }
              label="Export only one variant of a product"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Fragment>
  );
};

export default ExportModeRadio;
