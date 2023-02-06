import { recipe } from "@vanilla-extract/recipes";
import { vars } from "~/client/styles/global.css";

export const cardStyle = recipe({
  base: { display: "flex" },
  variants: {
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },
    space: {
      1: { padding: vars.space[1] },
      2: { padding: vars.space[2] },
      3: { padding: vars.space[3] },
      4: { padding: vars.space[4] },
      5: { padding: vars.space[5] },
      6: { padding: vars.space[6] },
      7: { padding: vars.space[7] },
      8: { padding: vars.space[8] },
      10: { padding: vars.space[10] },
      12: { padding: vars.space[12] },
      16: { padding: vars.space[16] },
      20: { padding: vars.space[20] },
      40: { padding: vars.space[40] },
      64: { padding: vars.space[64] },
      80: { padding: vars.space[80] },
    },
    spacing: {
      1: { gap: vars.space[1] },
      2: { gap: vars.space[2] },
      3: { gap: vars.space[3] },
      4: { gap: vars.space[4] },
      5: { gap: vars.space[5] },
      6: { gap: vars.space[6] },
      7: { gap: vars.space[7] },
      8: { gap: vars.space[8] },
      10: { gap: vars.space[10] },
      12: { gap: vars.space[12] },
      16: { gap: vars.space[16] },
      20: { gap: vars.space[20] },
      40: { gap: vars.space[40] },
      64: { gap: vars.space[64] },
      80: { gap: vars.space[80] },
    },
    radii: {
      px: { borderRadius: vars.radii.px },
      xs: { borderRadius: vars.radii.xs },
      sm: { borderRadius: vars.radii.sm },
      md: { borderRadius: vars.radii.md },
      lg: { borderRadius: vars.radii.lg },
      full: { borderRadius: vars.radii.full },
    },
    align: {
      normal: { alignItems: "normal" },
      stretch: { alignItems: "stretch" },
      center: { alignItems: "center" },
      "flex-start": { alignItems: "flex-start" },
      "flex-end": { alignItems: "flex-end" },
      start: { alignItems: "start" },
      end: { alignItems: "end" },
      baseline: { alignItems: "baseline" },
      initial: { alignItems: "initial" },
      inherit: { alignItems: "inherit" },
    },
    boxShadow: {
      xs: { boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.1)" },
      sm: { boxShadow: "4px 4px 9px rgba(0, 0, 0, 0.3)" },
      md: { boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" },
      lg: { boxShadow: "6px 6px 11px rgba(0, 0, 0, 0.7)" },
    },
    justify: {
      "flex-start": { justifyContent: "flex-start" },
      "flex-end": { justifyContent: "flex-end" },
      center: { justifyContent: "center" },
      "space-between": { justifyContent: "space-between" },
      "space-around": { justifyContent: "space-around" },
      "space-evenly": { justifyContent: "space-evenly" },
      initial: { justifyContent: "initial" },
      inherit: { justifyContent: "inherit" },
    },
    showBgColor: {
      true: { backgroundColor: vars.colors.bg[100] },
    },
  },
});
