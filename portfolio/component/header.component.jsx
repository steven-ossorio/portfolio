import {
  AppBar,
  Avatar,
  Container,
  Divider,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../styles/Home.module.css";

const navigationLinks = [
  {
    name: "About",
    href: "",
  },
  {
    name: "Work",
    href: "",
  },
  {
    name: "Projects",
    href: "",
  },
  {
    name: "Resume",
    href: "",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Avatar className="avatar">S</Avatar>
            <Hidden smDown>
              {navigationLinks.map((item) => (
                <Link
                  key={item.name}
                  className={item.name === "Resume" ? "resume box" : "link"}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
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
