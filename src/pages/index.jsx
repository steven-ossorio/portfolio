import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AboutMe from "../components/about-me.component";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const IndexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AboutMe />
    </ThemeProvider>
  );
};

export default IndexPage;
