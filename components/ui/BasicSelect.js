// import { useState } from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import PersonIcon from "@mui/icons-material/Person";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// export default function BasicSelect() {
//   const [user, setUser] = useState("");

//   const handleChange = (event) => {
//     setUser(event.target.value);
//   };

//   return (
//     // <Box sx={{ minWidth: 120, border: "none", outline: "none" }}>
//     <FormControl fullWidth sx={{ fontSize: 12, minWidth: 120 }}>
//       {/* <InputLabel id="demo-simple-select-label" sx={{ fontSize: 12 }}>
//           {" "}
//           <PersonIcon /> Kamal Ali
//         </InputLabel> */}
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value={user}
//         label="User"
//         onChange={handleChange}
//         sx={{ fontSize: 12 }}
//         displayEmpty
//       >
//         {/* <MenuItem value="">
//           <em>None</em>
//         </MenuItem> */}
//         <MenuItem value="" sx={{ fontSize: 12 }}>
//           <PersonIcon /> Kamal Ali
//         </MenuItem>
//         <MenuItem value={"umer"} sx={{ fontSize: 12 }}>
//           <PersonIcon /> Umer Ali
//         </MenuItem>
//       </Select>
//     </FormControl>
//     // </Box>

//     // <FormControl sx={{ m: 1, minWidth: 120 }}>
//     //   <Select
//     //     value={user}
//     //     onChange={handleChange}
//     //     displayEmpty
//     //     inputProps={{ "aria-label": "Without label" }}
//     //   >
//     //     <MenuItem value="">
//     //       <em>None</em>
//     //     </MenuItem>
//     //     <MenuItem value={10}>Ten</MenuItem>
//     //     <MenuItem value={20}>Twenty</MenuItem>
//     //     <MenuItem value={30}>Thirty</MenuItem>
//     //   </Select>
//     // </FormControl>
//   );
// }

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="text"
            {...bindTrigger(popupState)}
            sx={{
              color: "#000000",
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              borderRadius: "15px",
            }}
            startIcon={<PersonIcon />}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Kamal Ali
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
