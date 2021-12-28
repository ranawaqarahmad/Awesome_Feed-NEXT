import Card from "../ui/Card";
import Box from "@mui/material/Box";
import CustomButton from "../ui/Button";
const QTip1 = () => {
  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f5f5",
          borderRadius: "15px",
          padding: "18px",
          textAlign: "center",
        }}
      >
        <h4>Quick Tip 1</h4>
        <p>If you can’t see all of your collections</p>
        <CustomButton buttonStyle="btn-blue">Refresh them now</CustomButton>
        <p>Please note this may take a min or two. thanks</p>
      </Box>
    </Card>
  );
};

export default QTip1;
