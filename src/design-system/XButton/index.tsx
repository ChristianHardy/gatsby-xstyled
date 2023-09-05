import React from "react";
import { x } from "@xstyled/styled-components";
import { XCommonProps } from "../__types";

export type XButtonProps = React.DOMAttributes<HTMLButtonElement> &
  XCommonProps;

export const XButtonVariants = {
  primary: {
    backgroundColor: "primary-500",
    color: "white",
  },
};

function XButton(props: XButtonProps) {
  /**
   * Initializers
   */
  const { shouldRender = true } = props;

  /**
   * Renders
   */
  return shouldRender ? <x.button {...props} /> : null;
}

export { XButton };
