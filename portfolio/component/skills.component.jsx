import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          alignItems: "center",
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
              <Icon size={50} />
              <Typography>{name}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
