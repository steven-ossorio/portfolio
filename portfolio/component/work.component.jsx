import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Work = () => {
  return (
    <Paper
      sx={{
        padding: "10px",
      }}
      id="work"
    >
      <Container
        maxWidth="md"
        sx={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h4">Work Experience</Typography>
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
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2021-2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Typography>Crypto Project - Engineering Manager</Typography>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <Chip label="Solidity" variant="outlined"></Chip>
                  <Chip label="AWS" variant="outlined"></Chip>
                  <Chip label="Excel" variant="outlined"></Chip>
                  <Chip label="Github" variant="outlined"></Chip>
                  <Chip label="Netlify" variant="outlined"></Chip>
                </div>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2019-2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>Wayfair - Software Engineer</Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Chip label="ReactJS" variant="outlined"></Chip>
                <Chip label="JavaScript" variant="outlined"></Chip>
                <Chip label="CSS" variant="outlined"></Chip>
                <Chip label="PHP" variant="outlined"></Chip>
                <Chip label="MySQL" variant="outlined"></Chip>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2015-2017
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>Don Karpov - Production Assistant</Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Chip label="Adobe" variant="outlined"></Chip>
                <Chip label="DropBox" variant="outlined"></Chip>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2012-2013
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>
                United States of America Embassy Japan - Foreign Agriculture
                Service Intern{" "}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Chip label="Internal Tools" variant="outlined"></Chip>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Paper>
  );
};

export default Work;
