import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Hidden,
  Paper,
  Typography,
  Zoom,
  Grid,
} from "@mui/material";
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
              <Typography component="div" variant="h3">
                Hi, my name is Mike. I am a Software Engineer
              </Typography>
              <Typography component="div" variant="h5">
                I build websites, web application and responsive websites
              </Typography>
              <Box my={5}>
                <Button variant="outlined">Get in Touch!</Button>
              </Box>
            </Grid>
          </Zoom>
          <Hidden smDown={true}>
            <Grid item>
              <Social direction="column" />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
};

export default AboutMe;
