import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Fragment } from "react";
import Card from "../../components/ui/Card";
import CurrencySelect from "../../components/ui/CurrencySelect";
import LabelSelect0 from "../../components/ui/LabelSelect0";
import LabelSelect1 from "../../components/ui/LabelSelect1";
import LabelSelect2 from "../../components/ui/LabelSelect2";
import LabelSelect3 from "../../components/ui/LabelSelect3";
import FeaturedChips from "../../components/ui/FeaturedChips";
import Tips from "../../components/layouts/Tips";
import { makeStyles } from "@mui/styles";
import AppendCurrencyRadio from "../../components/layouts/AppendCurrencyRadio";
import AllProductsRadio from "../../components/layouts/AllProductsRadio";
import ExportModeRadio from "../../components/layouts/ExportModeRadio";

const FormRow = () => {
  return (
    <Fragment>
      <Grid item xs={6}>
        <TextField variant="filled" label="Product Feed Name" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <CurrencySelect />
      </Grid>
    </Fragment>
  );
};

const LabelRow = () => {
  return (
    <Fragment>
      <Grid item xs={6}>
        <LabelSelect0 />
      </Grid>
      <Grid item xs={6}>
        <LabelSelect1 />
      </Grid>
      <Grid item xs={6}>
        <LabelSelect2 />
      </Grid>
      <Grid item xs={6}>
        <LabelSelect3 />
      </Grid>
    </Fragment>
  );
};

const FeaturedCollection = () => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <FeaturedChips />
      </Grid>
    </Fragment>
  );
};

const useStyles = makeStyles({
  root: {
    "& h2": {
      fontSize: "24px",
    },
  },
});

const AddFeed = () => {
  const classes = useStyles();
  return (
    <Card>
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs={12}>
          <h2>Add a Product Feed</h2>
        </Grid>

        <Grid container item xs={8} spacing={5}>
          <FormRow />
          <AppendCurrencyRadio />
          <AllProductsRadio />
          <ExportModeRadio />
          <LabelRow />
          <FeaturedCollection />
        </Grid>

        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Tips />
        </Grid>
      </Grid>
    </Card>
  );
};

export default AddFeed;
