import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ height: "400px", width: "100%" }}>
      <Typography component="div" variant="h4" mt={5}>
        Contact Info
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
      <Box>
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            marginTop: "10px",
            marginBottom: "20px",
            height: "100px",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              marginLeft: "10px",
            }}
          >
            <LocationOnIcon />
            <Typography>Location: </Typography>
          </Box>
          <Typography>Houston, Texas</Typography>
        </Card>
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            marginTop: "10px",
            marginBottom: "20px",
            height: "100px",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              marginLeft: "10px",
            }}
          >
            <EmailIcon />
            <Typography>Email: </Typography>
          </Box>
          <address>usa.s.ossorio@gmail.com</address>
        </Card>
      </Box>
    </Container>
  );
};

export default Contact;
