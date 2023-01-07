import Head from "next/head";
import { Inter } from "@next/font/google";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../component/header.component";
import AboutMe from "../component/about.component";

const inter = Inter({ subsets: ["latin"] });

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <AboutMe />
      </ThemeProvider>
    </>
  );
}
