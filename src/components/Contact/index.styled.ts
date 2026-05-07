import { styled } from "@mui/material/styles";

export const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  padding: "48px 32px",
});

export const Body = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  fontSize: "15px",
  lineHeight: 1.75,
});

export const Label = styled("p")({
  margin: 0,
  color: "#999",
});

export const Email = styled("a")({
  margin: 0,
  color: "inherit",
  textDecoration: "none",
  fontWeight: 600,
});
