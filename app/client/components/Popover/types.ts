import type { ReactNode } from "react";

export type PositionProps =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right"
  | "top"
  | "left"
  | "bottom"
  | "right"
  | undefined;

export type PopoverProps = {
  children: ReactNode;
  button: ReactNode;
  position?: PositionProps;
  boxShadow?: "xs" | "sm" | "md" | "lg";
};
