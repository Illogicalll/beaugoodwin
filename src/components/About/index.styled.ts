import { styled } from "@mui/material/styles";

export const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  padding: "48px 32px",
});

export const Body = styled("div")(({ theme }) => ({
  maxWidth: "520px",
  display: "flex",
  flexDirection: "column",
  gap: "22px",
  fontSize: "15px",
  lineHeight: 1.75,
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
  },
}));

export const Photo = styled("img")(({ theme }) => ({
  width: "120px",
  height: "auto",
  display: "block",
  margin: "0 auto 8px",
  [theme.breakpoints.up("sm")]: {
    width: "200px",
  },
}));
