import { styled } from "@mui/material/styles";

export const Text = styled("div")(({ theme }) => ({
  maxWidth: "640px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "24px",
    gap: "28px",
  },
}));

export const Heading = styled("div")({
  fontSize: "10px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#999",
});

// 2-column grid; zigzag placement is set inline (see placements() in index.tsx).
// Narrow screens: plain centred single column (inline grid placement is ignored by flex).
export const Gallery = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "8%",
  rowGap: "40px",
  marginTop: "80px",
  "& > div": {
    alignSelf: "start",
  },
  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
  },
  // Lone item in a group: centred at single-column width (desktop only, so mobile stays full width)
  [theme.breakpoints.up("sm")]: {
    "& > [data-solo]": {
      justifySelf: "center",
      width: "46%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    marginTop: "52px",
    "& > div": {
      width: "100%",
      alignSelf: "center",
    },
  },
}));

// Full-width group label; negative bottom margin pulls it closer to its items than the row gap
export const GroupLabel = styled(Heading)(({ theme }) => ({
  gridColumn: "1 / -1",
  marginTop: "40px",
  marginBottom: "-24px",
  "&:first-of-type": {
    marginTop: 0,
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "-16px",
  },
}));

export const QuoteLabel = styled(Heading)({
  marginBottom: "12px",
});

export const Quote = styled("blockquote")({
  margin: 0,
  paddingLeft: "24px",
  borderLeft: "2px solid #000",
  fontSize: "15px",
  lineHeight: 1.8,
  fontStyle: "italic",
  "& p": {
    margin: 0,
    whiteSpace: "pre-line",
  },
  "& p + p": {
    marginTop: "20px",
  },
});
