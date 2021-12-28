import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Fira Sans", "sans-serif"].join(","),
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    // <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </ThemeProvider>
  );
}

export default MyApp;
