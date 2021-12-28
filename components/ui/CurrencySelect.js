import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const CurrencySelect = () => {
  const [currency, setCurrency] = useState("PKR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Currency"
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
          <MenuItem value="PKR">PKR (Pakistan)</MenuItem>
          <MenuItem value="USD">USD (USA)</MenuItem>
          <MenuItem value="EUR">EUR (European euro)</MenuItem>
          <MenuItem value="CAD">CAD (Canada)</MenuItem>
          <MenuItem value="AED">AED (UAE dirham)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CurrencySelect;
