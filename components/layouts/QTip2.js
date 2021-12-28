import Card from "../ui/Card";
import Box from "@mui/material/Box";

const QTip2 = () => {
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
        <p>
          Facebook poses a 100 chars limit on the length of custom labels, which
          mean some custom lables will get truncated. Featured collections allow
          you to specify collections which will alwate be included in the custom
          label.
        </p>
      </Box>
    </Card>
  );
};

export default QTip2;
