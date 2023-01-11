import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

const socialItems = [
  {
    name: "github",
    icon: GitHub,
    url: "https://github.com/steven-ossorio",
  },
  {
    name: "linkedin",
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/steven-ossorio/",
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
