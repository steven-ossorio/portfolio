import Github from "@mui/icons-material/GitHub";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Chip,
  Hidden,
} from "@mui/material";

const projectsData = [
  {
    title: "Clothing site",
    description:
      "A basic ecommerce site with functionality to browse, add, secure",
    imageUrl: "",
    imageAlt: "",
    tags: ["ReactJS", "Redux", "Styled-Components"],
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
      "A basic ecommerce site with functionality to browse, add, secure",
    imageUrl: "",
    imageAlt: "",
    tags: ["ReactJS", "Redux", "Styled-Components"],
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
      <Box pt={2} mb={2}>
        <Typography variant="h4">Projects</Typography>
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
