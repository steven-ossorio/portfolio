import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiReact } from "react-icons/di";
import {
  SiAmazonaws,
  SiExpress,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    Icon: DiReact,
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
  },
  {
    name: "NextJS",
    Icon: SiNextdotjs,
  },
  {
    name: "TailWindCSS",
    Icon: SiTailwindcss,
  },

  {
    name: "JavaScript",
    Icon: SiJavascript,
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
  {
    name: "Express",
    Icon: SiExpress,
  },
  {
    name: "Styled Component",
    Icon: SiStyledcomponents,
  },
  {
    name: "HTML5",
    Icon: AiFillHtml5,
  },
  {
    name: "CSS3",
    Icon: DiCss3Full,
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="container flex flex-col md:max-w-2xl xl:max-w-4xl pl-4 pr-4 mb-4 mt-4 lg:p-0 lg:m-0"
    >
      <div>
        <div className="text-4xl mb-4 bold lg:mt-8">Skills</div>
        <hr className="w-48 h-1 my-4 bg-red-600 border-0 rounded dark:bg-gray-700" />
      </div>
      <Box className="flex flex-wrap justify-start" mt={5}>
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
    </div>
  );
};

export default Skills;
