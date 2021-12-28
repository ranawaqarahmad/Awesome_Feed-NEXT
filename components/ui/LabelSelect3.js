import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const LabelSelect3 = () => {
  const [label, setLabel] = useState("");

  const handleChange = (event) => {
    setLabel(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Custom Label 3: Empty
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={label}
          label="Custom Label 3: Empty"
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiList-root": {
                  backgroundColor: "#e6e6e6",
                  borderRadius: "15px",
                },
              },
            },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LabelSelect3;
