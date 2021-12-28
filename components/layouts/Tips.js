import Box from "@mui/material/Box";
import Card from "../ui/Card";
import CustomButton from "../ui/Button";
import Star from "../assets/images/star.png";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    flexWrap: "wrap",
    "& .qt": {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f5f5f5",
      borderRadius: "15px",
      padding: "18px",
      textAlign: "center",
      justifyContent: "space-between",
    },

    "& .light-grey-txt": {
      fontSize: "15px",
      color: "#acacac",
    },
  },
});
const Tips = () => {
  const classes = useStyles();
  return (
    // <Box className={classes.root}>
    <>
      <Card>
        <Box
          className="qt"
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f5f5f5",
            borderRadius: "15px",
            padding: "18px",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <h4>
            {" "}
            <span>
              {" "}
              <Image src={Star} alt="star image" />{" "}
            </span>{" "}
            Quick Tip 1
          </h4>
          <p className="light-grey-txt">
            If you can’t see all of your collections
          </p>
          <CustomButton buttonStyle="btn-blue" buttonSize="btn-lrg">
            Refresh them now
          </CustomButton>
          <p className="light-grey-txt">
            Please note this may take a min or two. thanks
          </p>
        </Box>
      </Card>
      <Card>
        <Box
          className="qt"
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f5f5f5",
            borderRadius: "15px",
            padding: "18px",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <h4>
            <span>
              {" "}
              <Image src={Star} alt="star image" />{" "}
            </span>
            Quick Tip 2
          </h4>
          <p className="light-grey-txt">
            Facebook poses a 100 chars limit on the length of custom labels,
            which mean some custom lables will get truncated. Featured
            collections allow you to specify collections which will alwate be
            included in the custom label.
          </p>
        </Box>
      </Card>
    </>
  );
};

export default Tips;
