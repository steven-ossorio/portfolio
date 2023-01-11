import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";

import Link from "next/link";

import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Github from "@mui/icons-material/GitHub";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const cssProjects = [
  {
    id: 1,
    title: "Sliding animation",
    subheader: "January 10th",
    github:
      "https://github.com/steven-ossorio/30-days-of-css/tree/main/first-day",
    image: "first-day-image.png",
    alt: "first-day-css-image",
    githubIcon: Github,
    openInNew: OpenInNew,
  },
];

const Resume = () => {
  return (
    <Container>
      {cssProjects.map((project) => {
        return (
          <Card sx={{ maxWidth: 500 }}>
            <CardHeader title={project.title} subheader={project.subheader} />
            <CardMedia
              component="img"
              height="194"
              width="300"
              image={project.image}
              alt={project.alt}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="open github" href={project.github}>
                <project.githubIcon />
              </IconButton>
              <Link href={`/css/${project.id}`}>
                <project.openInNew />
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </Container>
  );
};

export default Resume;
