import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Fragment, useState } from "react";
import CustomButton from "../ui/Button";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const FeaturedCollection = [
  { key: 0, label: "1 piece collection (15 products)" },
  { key: 1, label: "2 piece collection (6 products)" },
  { key: 2, label: "3 piece collection (124 products)" },
  {
    key: 3,
    label: "3 piece collection - Alphabetically: A-Z (124 products)",
  },
  { key: 4, label: "Sale (215 products)" },
];

export default function FeaturedChips() {
  const [chipData, setChipData] = useState(FeaturedCollection);
  const [addLabel, setAddLabel] = useState(false);
  const [item, setItem] = useState(FeaturedCollection);
  const [newLable, setNewLabel] = useState("");

  const handleDelete = (chipToDelete) => () => {
    setItem((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const addLabelHandler = () => {
    setAddLabel(!addLabel);
  };

  const onChangeHandler = (e) => {
    // console.log(e.target.value);

    setNewLabel(e.target.value);
    // setNewLabel(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setItem([...item, { key: Date.now(), label: newLable }]);
    setNewLabel("");
  };

  return (
    <Fragment>
      <Grid item xs={12} sx={{ margin: "20px 0" }}>
        <CustomButton
          buttonStyle="btn-outline"
          onClick={addLabelHandler}
          buttonSize="btn-lrg"
        >
          Add more labels
        </CustomButton>
      </Grid>
      <Grid item xs={12} sx={{ margin: "40px 0" }}>
        {addLabel ? (
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="New Label"
                  fullWidth
                  value={newLable}
                  onChange={onChangeHandler}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomButton
                  buttonStyle="btn-light-green"
                  buttonSize="btn-lrg"
                  className="butn"
                  onClick={onSubmitHandler}
                >
                  Add Label
                </CustomButton>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          ""
        )}
      </Grid>
      <Grid item xs={12}>
        <h4>Featured collection on custom lables</h4>
      </Grid>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          m: 0,
          border: "2px solid #e5e5e5",
          borderRadius: "10px",
          padding: "20px",
        }}
        component="ul"
      >
        {item.map((data) => {
          return (
            <ListItem key={data.key}>
              <Chip label={data.label} onDelete={handleDelete(data)} />
            </ListItem>
          );
        })}
      </Paper>
    </Fragment>
  );
}
