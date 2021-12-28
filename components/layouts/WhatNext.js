import Card from "../ui/Card";
import CustomButton from "../ui/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "35vh",
    "& h2": {
      fontSize: "24px",
    },
    "& .light-grey-text": {
      color: "#acacac",
      fontSize: "15px",
    },
  },
});

const WhatNext = () => {
  const classes = useStyles();

  return (
    <Card>
      <Box className={classes.root}>
        <h2>What to do next</h2>
        <p className="light-grey-text">
          If you don’t have a product catalog, you have to create one:
        </p>
        <Box sx={{ textAlign: "center", marginBottom: "15px" }}>
          <CustomButton
            className="bttn"
            buttonStyle="btn-blue"
            buttonSize="bttn-xlg"
          >
            Create product catalog in business manager
          </CustomButton>
        </Box>
        <p className="light-grey-text">
          Follow the instructions. When asked for a product URL , copy and paste
          the{" "}
          <a href="#" style={{ color: "#2655AA", textDecoration: "underline" }}>
            Feed URL
          </a>{" "}
          that provided above.
        </p>
        <p className="light-grey-text">Need Help? just email us at</p>
        <p>
          <strong>Support@awesomestoreapps.com</strong>
        </p>
      </Box>
    </Card>
  );
};

export default WhatNext;
