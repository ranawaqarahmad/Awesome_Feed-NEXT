import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomButton from "../ui/Button";

function createData(plan, price, max_products, resize_image, subscribe) {
  return { plan, price, max_products, resize_image, subscribe };
}

const rows = [
  createData(
    "Small",
    "$14",
    "500 Products",
    <CancelIcon sx={{ color: "#F46060" }} />,
    <CustomButton buttonStyle="btn-light-green" buttonSize="btn-lrg">
      {" "}
      Subscribe{" "}
    </CustomButton>
  ),
  createData(
    "Medium",
    "$24",
    "2000 Products",
    <CancelIcon sx={{ color: "#F46060" }} />,
    <CustomButton buttonStyle="btn-grey" buttonSize="btn-lrg" disabled>
      {" "}
      Subscribe{" "}
    </CustomButton>
  ),
  createData(
    "Large",
    "$34",
    "Unlimited Products",
    <CheckCircleIcon sx={{ color: "#1FC4A4" }} />,
    <CustomButton buttonStyle="btn-light-green" buttonSize="btn-lrg">
      {" "}
      Subscribe{" "}
    </CustomButton>
  ),
];

const useStyles = makeStyles({
  root: {
    "& .MuiTableCell-head": {
      backgroundColor: "#F5F5F5",
    },
  },
});

export default function BasicTable() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Table
        sx={{
          minWidth: 650,
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
        aria-label="simple table"
        className="product-feed-tbl"
      >
        <TableHead>
          <TableRow className={classes.root}>
            <TableCell>Plan</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Max Products</TableCell>
            <TableCell>Resize Image</TableCell>
            <TableCell>Subscribe</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                {row.plan}
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.max_products}</TableCell>
              <TableCell>{row.resize_image}</TableCell>
              <TableCell>{row.subscribe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
