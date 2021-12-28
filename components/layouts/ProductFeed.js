import { Fragment } from "react";
import Card from "../ui/Card";
import ProductFeedTable from "../ui/ProductFeedTable";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { IconButton, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
    "& h2": {
      fontSize: "24px",
    },
    "& .light-grey-txt": {
      fontSize: "15px",
      color: "#acacac",
    },
  },
});
const ProductFeed = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.root}>
        <Card>
          <div className="d-flex justify-content-between align-items-center">
            <h2>Products Feed</h2>
            <p className="light-grey-txt">
              <IconButton>
                <ArrowCircleLeftIcon />{" "}
              </IconButton>
              Back to shopify admin
            </p>
          </div>
          <ProductFeedTable />
        </Card>
      </Box>
    </Fragment>
  );
};

export default ProductFeed;
