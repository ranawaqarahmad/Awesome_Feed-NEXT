import Card from "../ui/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "35vh",
    "& h2": {
      fontSize: "24px",
    },
    "& h6": {
      fontSize: "15px",
      fontWeight: "900",
    },
    "& .light-grey-txt": {
      fontSize: "15px",
      color: "#acacac",
    },
  },
});
const FAQ = () => {
  const classes = useStyles();

  return (
    <Card>
      <div className={classes.root}>
        <div>
          <h2>FAQ’s</h2>
          <h6>How often are products and feeds updated?</h6>
          <p className="light-grey-txt">
            If you are a registered Free user, you can upload up to 3 personal
            icons per collection. If you are a Premium user, you can add up to
            256 personal icons per collection.
          </p>
        </div>
        <div>
          <TextField
            label="Can't find an answer to your question?"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="text" endIcon={<ArrowRightAltIcon />}>
                    Submit a request{" "}
                  </Button>
                </InputAdornment>
              ),
            }}
            variant="filled"
            fullWidth
          />
        </div>
      </div>
    </Card>
  );
};

export default FAQ;
