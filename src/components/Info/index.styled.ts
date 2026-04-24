import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "0 16px",
  userSelect: "none",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    padding: "16px",
  },
}));

export const Name = styled(Link)({
  display: "inline-block",
  fontSize: "40px",
  fontWeight: 700,
  color: "inherit",
  textDecoration: "none",
  fontFamily: "inherit",
  lineHeight: 0.9,
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

export const SubText = styled("div")(({ theme }) => ({
  paddingLeft: "3px",
  fontSize: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "4px",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));

export const Tagline = styled(Typography)({});

export const Clickable = styled(Link)({
  display: "inline-block",
  color: "inherit",
  textDecoration: "none",
  fontFamily: "inherit",
  lineHeight: 0.9,
  marginBottom: "4px",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});
