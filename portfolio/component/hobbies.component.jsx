import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";

const images = [
  { img: "../public/steven-f1.png", title: "Formula 1" },
  { img: "steven-bambi.png", title: "Border Collie" },
  { img: "steven-happy.png", title: "Golden Retriever" },
];

const Hobbies = () => {
  return (
    <Container maxWidth="md">
      <Typography component="div" variant="h4" mt={5}>
        My Hobbies <span className="wave">🏋🏻🏎🐾✈️</span>
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
      <Box display="flex" justifyContent="space-between">
        {images.map((item) => (
          <ImageListItem key={item.img}>
            {/* <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            /> */}
            <ImageListItemBar
              title={<Typography>{item.title}</Typography>}
              position="top"
            />
          </ImageListItem>
        ))}
      </Box>
    </Container>
  );
};

export default Hobbies;
