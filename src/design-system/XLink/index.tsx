import { Link } from "gatsby";
import React from "react";
import { XCommonProps } from "../__types";
import { useTheme } from "@xstyled/styled-components";

export type XLinkProps = XCommonProps & {
  appearance?: "button" | "raw";

  // Gatsby LinkProps
  // Documentation: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#link-api-surface-area
  to: string;
  // activeClassName?: string;
  // activeStyle?: React.CSSProperties;
  // partiallyActive?: boolean;
};

function XLink(props: XLinkProps) {
  /**
   * Initializers
   */
  const { shouldRender = true, to, children } = props;
  const gatsbyLinkProps = { to, children };
  const theme = useTheme();

  const buttonStyles: React.CSSProperties = {
    margin: "0 16px",
    padding: "8px 16px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 500,
    height: 41,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme && theme.colors["dark-blue-100"],
  };

  const activeButtonStyles: React.CSSProperties = {
    backgroundColor: theme && theme.colors["dark-blue-200"],
    color: "white",
  };

  /**
   * Renders
   */
  return shouldRender ? (
    <Link
      {...gatsbyLinkProps}
      style={buttonStyles}
      activeStyle={activeButtonStyles}
    />
  ) : null;
}

export { XLink };
