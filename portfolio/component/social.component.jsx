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
    <Box display="flex" spacing={2} alignSelf="flex-start" mt={4}>
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
