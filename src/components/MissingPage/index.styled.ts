import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});

export const Title = styled(Typography)({
  fontSize: "36px",
  fontWeight: "600",
});

export const Description = styled(Typography)({
  fontSize: "20px",
  fontWeight: "400",
});
