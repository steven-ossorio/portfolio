import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Hidden,
  Paper,
  Card,
  CardMedia,
  Typography,
  Zoom,
  Grid,
  Fade,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Social from "./social.component";

const AboutMe = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setShouldShow(true);
  }, []);

  return (
    <Paper className="section" id="about">
      <div className="overlay"></div>
      <Container className="container" maxWidth="md">
        <Grid
          className="content"
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="div" variant="h4">
                About me <span className="wave">👋</span>
              </Typography>
              <Divider
                sx={{
                  color: "red",
                  width: "50%",
                  borderBottomWidth: "3px",
                  backgroundColor: "red",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography component="div" variant="h6">
                  My name is Steven and I am a Software Engineer who loves to
                  transform ideas into reality using code. With a little over a
                  year of professional experience, I continue to develop web
                  applications using the latest front-end and back-end
                  technologies.
                </Typography>
                <Typography
                  mt={4}
                  variant="subtitle1"
                  sx={{
                    fontSize: "1.2em",
                    fontWeight: 400,
                    color: "#7F7FF1",
                  }}
                >
                  Why Computer Science/Coding?
                </Typography>
                <Typography>
                  The hunger for knowledge and growth much like a doctor is what
                  motivates me to continue to love what I do on a daily base.
                </Typography>
                <Social direction="column" />
              </Box>
            </Grid>
          </Zoom>
        </Grid>
      </Container>
    </Paper>
  );
};

export default AboutMe;
