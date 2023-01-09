import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { IconButton, Link, Grid, Typography, Box } from "@mui/material";

const socialItems = [
  {
    name: "github",
    icon: GitHub,
    url: "",
  },
  {
    name: "linkedin",
    icon: LinkedIn,
    url: "",
  },
];

const Social = ({ direction }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      spacing={2}
      position="fixed"
    >
      <Typography>S</Typography>
      <Typography>O</Typography>
      <Typography>C</Typography>
      <Typography>I</Typography>
      <Typography>A</Typography>
      <Typography>L</Typography>
      <Typography>S</Typography>
      {socialItems.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url}>
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Box>
  );
};

export default Social;
