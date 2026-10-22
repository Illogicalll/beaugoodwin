import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

export const Viewer = styled("div")({
  position: "fixed",
  inset: 0,
  height: "100dvh",
  backgroundColor: "#fff",
  outline: "none",
});

export const Close = styled(IconButton)({
  position: "absolute",
  top: "8px",
  right: "8px",
  zIndex: 1,
  color: "#000",
});

export const Img = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
  display: "block",
  cursor: "grab",
});
