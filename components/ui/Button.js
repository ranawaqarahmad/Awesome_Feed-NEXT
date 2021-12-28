const STYLES = [
  "btn-green",
  "btn-light-green",
  "btn-grey",
  "btn-white",
  "btn-blue",
  "btn-outline",
];
const SIZES = ["btn-sml", "btn-med", "btn-lrg", "btn-xlrg"];

// const Button = (props) => {
//   const checkButtonStyle = STYLES.includes(props.buttonStyle)
//     ? props.buttonStyle
//     : STYLES[0];
//   const checkButtonSize = SIZES.includes(props.buttonSize)
//     ? props.buttonSize
//     : SIZES[1];

//   return (
//     <button
//       disabled={props.disabled}
//       onClick={props.onClick}
//       className={`butn ${props.customClass} ${checkButtonStyle} ${checkButtonSize}`}
//     >
//       {props.children}
//     </button>
//   );
// };

import { Button } from "@mui/material";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    margin: "5px",
    "& .btn-lrg": {
      padding: "10px 20px",
    },
  },
});
const CustomButton = (props) => {
  const classes = useStyles();
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(props.buttonSize)
    ? props.buttonSize
    : SIZES[1];

  return (
    <div className={classes.root}>
      <Button
        className={`butn ${props.customClass} ${checkButtonStyle} ${checkButtonSize}`}
        disabled={props.disabled}
        onClick={props.onClick}
        loading={props.loading}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default CustomButton;
