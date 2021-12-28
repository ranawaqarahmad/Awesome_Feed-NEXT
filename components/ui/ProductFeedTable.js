import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Button from "./Button";
import { IconButton } from "@mui/material";
function createData(
  id,
  name,
  num,
  status,
  last_ref,
  feed_url,
  view_feed,
  edit_del
) {
  return { id, name, num, status, last_ref, feed_url, view_feed, edit_del };
}

const rows = [
  createData(
    10520,
    "Product Feed(PKR,NL)",
    278,
    "OK",
    "2021-07-06 10:53:34 (3 min ago)",
    "https://awesoma...",
    "View",
    ""
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
    <TableContainer component={Paper}>
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
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Num</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Refreshed at</TableCell>
            <TableCell>Feed URL</TableCell>
            <TableCell>View Feed</TableCell>
            <TableCell>Edit/Delete</TableCell>
            <TableCell></TableCell>
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
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.num}</TableCell>
              <TableCell>
                {row.status}{" "}
                <CheckCircleIcon sx={{ color: "#3BB54A", fontSize: 16 }} />{" "}
              </TableCell>
              <TableCell>{row.last_ref}</TableCell>
              <TableCell>
                {row.feed_url}{" "}
                <IconButton>
                  <ContentCopyIcon sx={{ color: "#FFB229", fontSize: 16 }} />
                </IconButton>
              </TableCell>
              <TableCell>
                {row.view_feed} <VisibilityIcon />
              </TableCell>
              <TableCell>
                {row.edit_del}{" "}
                <span>
                  <IconButton>
                    <EditIcon sx={{ color: "#3BB54A" }} />
                  </IconButton>
                </span>
                <span>
                  <IconButton>
                    <DeleteIcon sx={{ color: "#f56a6a" }} />
                  </IconButton>
                </span>{" "}
              </TableCell>
              <TableCell>
                {" "}
                <Button
                  className="butn"
                  buttonStyle="btn-light-green"
                  buttonSize="btn-sml"
                >
                  Update
                </Button>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
