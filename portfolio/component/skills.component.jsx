import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiReact } from "react-icons/di";
import {
  SiJavascript,
  SiStyledcomponents,
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiAmazonaws,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    Icon: AiFillHtml5,
  },
  {
    name: "CSS3",
    Icon: DiCss3Full,
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
  },
  {
    name: "React",
    Icon: DiReact,
  },
  {
    name: "Styled Component",
    Icon: SiStyledcomponents,
  },
  {
    name: "Redux",
    Icon: SiRedux,
  },
  {
    name: "GraphQL",
    Icon: SiGraphql,
  },
  {
    name: "Postgres",
    Icon: SiPostgresql,
  },
  {
    name: "Amazon",
    Icon: SiAmazonaws,
  },
  {
    name: "Git",
    Icon: SiGithub,
  },
];

const Skills = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "50px" }}>
      <Typography component="div" variant="h4">
        Skills
      </Typography>
      <Divider
        sx={{
          color: "red",
          width: "50%",
          borderBottomWidth: "3px",
          backgroundColor: "red",
          marginBottom: "20px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
        mt={5}
      >
        {skills.map(({ name, Icon }) => {
          return (
            <Box
              key={name}
              mr={4}
              mb={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  "&:hover": {
                    color: "#FF3831",
                    cursor: "pointer",
                  },
                }}
              >
                <Icon size={50} />
              </Box>
              <Typography>{name}</Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Skills;
