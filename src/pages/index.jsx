import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AboutMe from "../components/about-me.component";
import Header from "../components/header.component";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const IndexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <AboutMe />
    </ThemeProvider>
  );
};

export default IndexPage;
