import { styled } from "@mui/material/styles";

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
