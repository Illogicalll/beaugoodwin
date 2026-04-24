import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Line = styled(Box)(({ theme }) => ({
  width: "1px",
  height: "100vh",
  backgroundColor: "#000",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "1px",
  },
}));
