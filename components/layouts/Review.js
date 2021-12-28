import Card from "../ui/Card";
import Box from "@mui/material/Box";
import CustomButton from "../ui/Button";
import Image from "next/image";
import Star from "../assets/images/star.png";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "35vh",
    backgroundColor: "#f5f5f5",
    borderRadius: "15px",
    padding: "18px",
    textAlign: "center",

    "& h4": {
      fontSize: "18px",
    },
    "& .light-grey-txt": {
      color: "#acacac",
      fontSize: "15px",
    },
  },
});

const Review = () => {
  const classes = useStyles();

  return (
    <Card>
      <Box className={classes.root}>
        <h4>Happy with the app?</h4>
        <Box>
          <span>
            <Image src={Star} alt="stars image" />
          </span>
          <span>
            <Image src={Star} alt="stars image" />
          </span>
          <span>
            <Image src={Star} alt="stars image" />
          </span>
          <span>
            <Image src={Star} alt="stars image" />
          </span>
          <span>
            <Image src={Star} alt="stars image" />
          </span>
        </Box>

        <p className="light-grey-txt">
          We’ll appreciate if you could leave a short review that help us
          building new and better features instead of marketing.
        </p>
        <CustomButton buttonStyle="btn-light-green" buttonSize="btn-lrg">
          Leave a Review
        </CustomButton>
      </Box>
    </Card>
  );
};

export default Review;
