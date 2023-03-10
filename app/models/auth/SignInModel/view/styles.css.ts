import { keyframes, style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const viewContainerStyle = style({
  display: "flex",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
});

export const heroContainerStyle = style({
  flex: 1,
  "@media": { "(max-width: 1000px)": { display: "none" } },
});

export const formContainerStyle = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const animateEnterForm = keyframes({
  from: { opacity: 0, transform: "translateX(100px)" },
  to: { opacity: 1, transform: "translateX(0px)" },
});

export const formStyle = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "30rem",
  padding: vars.space[4],
  gap: vars.space[3],
  animation: `${animateEnterForm} 0.7s`,
});

export const headingStyle = style({
  color: vars.colors.primary[500],
  fontSize: vars.fontSizes["4xl"],
});

export const textStyle = style({
  marginBottom: vars.space[2],
  fontWeight: vars.fontWeights.medium,
});

export const linkStyle = style({
  color: vars.colors.text[100],
  marginBottom: vars.space[2],
  fontWeight: vars.fontWeights.regular,

  textDecoration: "none",
  ":hover": { textDecoration: "underline" },
});
