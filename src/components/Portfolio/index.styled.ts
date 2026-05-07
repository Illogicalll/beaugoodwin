import { styled } from "@mui/material/styles";

export const SectionLabel = styled("div")(({ theme }) => ({
  fontSize: "10px",
  fontWeight: 400,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#999",
  marginBottom: "6px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
  },
}));

export const Group = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "23px",
  marginBottom: "30px",
});

export const List = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "60px",
  position: "fixed",
  top: "50%",
  transform: "translateY(-50%)",
  paddingLeft: "20px",
  [theme.breakpoints.down("sm")]: {
    position: "static",
    transform: "none",
    gap: "32px",
    padding: "24px 16px",
  },
}));
