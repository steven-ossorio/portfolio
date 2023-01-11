import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Toolbar from "@mui/material/Toolbar";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "../styles/Home.module.css";
import { Typography } from "@mui/material";

const navigationLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Hobbies",
    href: "#hobbies",
  },
  {
    name: "Resume",
    href: "/steven_resume_2022.pdf",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Avatar
              sx={{
                marginRight: "auto",
                color: "white",
                backgroundColor: "black",
                borderRadius: "0",
                height: "30px",
                border: "2px solid gray",
              }}
            >
              S
            </Avatar>
            <Hidden smDown>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {navigationLinks.map((item) => (
                  <Link
                    key={item.name}
                    className={item.name === "Resume" ? "resume box" : "link"}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href={item.href}
                  >
                    <Typography>{item.name}</Typography>
                  </Link>
                ))}
              </Box>
            </Hidden>
            <Hidden smUp>
              <MenuIcon onClick={() => setOpen(true)} />
            </Hidden>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div>
            <IconButton onClick={() => setOpen(false)}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {navigationLinks.map((item) => (
              <ListItem key={item.name}>
                <Link
                  className={item.name === "Resume" ? "resume box" : "link"}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </div>
  );
};

export default Header;
