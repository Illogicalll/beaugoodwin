import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const Container = styled(Link)({
  display: "inline-block",
  color: "inherit",
  textDecoration: "none",
});

export const Title = styled(Typography)({
  fontSize: "24px",
  fontWeight: "600",
});
