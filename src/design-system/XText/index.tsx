import React from "react";
import { x } from "@xstyled/styled-components";
import { XCommonProps } from "../__types";

export type XTextProps = React.DOMAttributes<HTMLParagraphElement> &
  XCommonProps;

function XText(props: XTextProps) {
  /**
   * Initializers
   */
  const { shouldRender = true } = props;

  /**
   * Renders
   */
  return shouldRender ? <x.p {...props} /> : null;
}

export { XText };
