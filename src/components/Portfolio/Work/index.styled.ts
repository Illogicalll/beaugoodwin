import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const Container = styled(Link)({
  display: "inline-block",
  color: "inherit",
  textDecoration: "none",
  "@media (hover: hover)": {
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
  "&:active": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

export const Title = styled(Typography)({
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: 0.9,
  marginBottom: "10px",
});

export const Subtitle = styled(Typography)({
  lineHeight: 0.9,
});
