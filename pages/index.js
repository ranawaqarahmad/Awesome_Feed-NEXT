import ProductFeed from "../components/layouts/ProductFeed";
import WhatNext from "../components/layouts/WhatNext";
import Review from "../components/layouts/Review";
import FAQ from "../components/layouts/FAQ";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const Home = () => {
  return (
    <div className="home">
      {/* <Box sx={{ marginBottom: "40px" }}> */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProductFeed />
        </Grid>
      </Grid>
      {/* </Box> */}

      {/* <Box sx={{ marginTop: "40px" }}> */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <WhatNext />
        </Grid>
        <Grid item xs={5}>
          <FAQ />
        </Grid>
        <Grid item xs={3}>
          <Review />
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
};

export default Home;
