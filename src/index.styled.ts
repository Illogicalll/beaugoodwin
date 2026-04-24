import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Layout = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const Sidebar = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  height: "100vh",
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "100%",
    flexDirection: "column",
    zIndex: theme.zIndex.appBar,
    backgroundColor: "#fff",
  },
}));

export const Page = styled(Box)({
  flex: 1,
});
