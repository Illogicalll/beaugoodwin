import { styled } from "@mui/material/styles";

export const PageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flex: 1,
});

export const Container = styled("div")(({ theme }) => ({
  padding: "48px 40px",
  maxWidth: "960px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "24px 16px",
  },
}));

export const Title = styled("div")(({ theme }) => ({
  fontSize: "10px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#999",
  marginBottom: "34px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
  },
}));

export const Hero = styled("img")(({ theme }) => ({
  width: "calc(50% - 24px)",
  height: "auto",
  display: "block",
  margin: "0 auto 72px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: "30px",
  },
}));

export const Row = styled("div")<{ swapMobile?: boolean }>(
  ({ theme, swapMobile }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "center",
    marginBottom: "80px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: "28px",
      marginBottom: "52px",
      ...(swapMobile && {
        "& > *:first-of-type": { order: 1 },
        "& > *:last-child": { order: -1 },
      }),
    },
  }),
);

export const Img = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
});

export const Copy = styled("div")(({ theme }) => ({
  fontSize: "15px",
  lineHeight: 1.8,
  color: "#000",
  "& p + p": {
    marginTop: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 16px",
  },
}));
