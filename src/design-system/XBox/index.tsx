import React from "react";

import { x } from "@xstyled/styled-components";
import { XDivBoxProps } from "../__types";

export type XBoxProps = React.DOMAttributes<HTMLDivElement> & XDivBoxProps;

function XBox(props: XBoxProps) {
  /**
   * Initializers
   */
  const { shouldRender = true } = props;

  /**
   * Renders
   */
  return shouldRender ? <x.div {...props} /> : null;
}

export { XBox };
