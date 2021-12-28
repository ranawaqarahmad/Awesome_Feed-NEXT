import MainNavigation from "./MainNavigation";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles({
  root: {
    maxWidth: "1500px",
    width: "96%",
    margin: "0 auto",
    padding: "1rem",
  },
});
const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MainNavigation />
      <main> {props.children} </main>
    </div>
  );
};

export default Layout;
