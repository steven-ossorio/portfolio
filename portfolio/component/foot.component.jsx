import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography>Copyright &#169; 2022 Steven Ossorio </Typography>
    </Box>
  );
};

export default Footer;
