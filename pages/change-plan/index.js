import Card from "../../components/ui/Card";
import Box from "@mui/material/Box";
import ChangePlanTbl from "../../components/layouts/ChangePlanTbl";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& h2": {
      fontSize: "24px",
    },
    "& .light-grey-txt": {
      color: "#acacac",
      fontSize: "15px",
    },
    "& strong": {
      color: "#202D35",
    },
  },
});

const ChangePlan = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Change Plan</h2>
          <p className="light-grey-txt">Clear All Plans</p>
        </Box>
        <ChangePlanTbl />
      </Card>
      <Box>
        <Box sx={{ display: "flex" }}>
          <span>
            <HelpOutlineOutlinedIcon
              sx={{ fontSize: "32px", color: "#12B596" }}
            />{" "}
          </span>

          <span>
            <h3>Need Help</h3>
          </span>
        </Box>

        <p className="light-grey-txt">
          We’re happy to Help. just email us at{" "}
          <strong>Support@awesomestoreapps.com</strong>{" "}
        </p>
      </Box>
    </Box>
  );
};

export default ChangePlan;
