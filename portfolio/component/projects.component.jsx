import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import Github from "@mui/icons-material/GitHub";
import OpenInNew from "@mui/icons-material/OpenInNew";

const projectsData = [
  {
    title: "Clothing site",
    description:
      "A basic eCommerce site that will be continually build upon. Allow a user to add a product to the cart, checkout and use a credit card (dummy) for purchase",
    imageUrl: "",
    imageAlt: "",
    tags: ["ReactJS", "Redux", "Styled-Components", "Firebase", "Stripe"],
    links: [
      {
        name: "github",
        icon: Github,
        href: "",
      },
      {
        name: "open",
        icon: OpenInNew,
        href: "",
      },
    ],
  },
  {
    title: "30 days of CSS",
    description:
      "Self improvement goal. Daily challenge of tackling a specific topic or type of UI to implement in CSS. This can be creating something fun with Transoform/Transition or building a Navbar as practice",
    imageUrl: "",
    imageAlt: "",
    tags: ["HTML", "CSS"],
    links: [
      {
        name: "github",
        icon: Github,
        href: "",
      },
      {
        name: "open",
        icon: OpenInNew,
        href: "",
      },
    ],
  },
];

const TagsContainer = ({ tags }) => {
  return (
    <div>
      {tags.map((tagItem) => {
        return (
          <Chip
            className="tag"
            key={tagItem}
            label={tagItem}
            variant="outlined"
          ></Chip>
        );
      })}
    </div>
  );
};

const Project = ({ title, description, tags, links }) => {
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography variant="h5" paragraph>
            {title}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {description}
          </Typography>
          <Hidden smUp>
            <TagsContainer tags={tags} />
          </Hidden>
        </CardContent>
        <CardActions>
          <div className="links">
            {links.map((linkItem) => {
              return (
                <IconButton key={linkItem.name} href={linkItem.href}>
                  <linkItem.icon />
                </IconButton>
              );
            })}
          </div>
          <Hidden smDown>
            <TagsContainer tags={tags} />
          </Hidden>
        </CardActions>
      </Card>
    </Grid>
  );
};

const Projects = () => {
  return (
    <Container maxWidth="md" id="projects">
      <Box mb={2}>
        <Typography variant="h4" mt={5}>
          Projects
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
      </Box>
      <Grid container direction="column" spacing={4}>
        {projectsData.map((data) => {
          return <Project key={data.title} {...data} />;
        })}
      </Grid>
    </Container>
  );
};

export default Projects;
