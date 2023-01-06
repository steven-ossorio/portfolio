import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { IconButton, Link } from "@mui/material";

const socialItems = [
  {
    icon: GitHub,
    url: "",
  },
  {
    icon: LinkedIn,
    url: "",
  },
];

const Social = ({ direction }) => {
  return (
    <Grid2 container direction={direction || "row"} spacing={2}>
      {socialItems.map((item) => (
        <Grid2 item>
          <Link href={item.url}>
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Social;
