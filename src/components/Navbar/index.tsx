import React from "react";
import { XBox, XBoxProps, XText, XLink } from "../../design-system";

export type NavbarProps = {
  someVar?: boolean;
  someFn?: (param: boolean) => void;
};

function Navbar(props: NavbarProps) {
  /**
   * Initializers
   */
  const wrapperProps: XBoxProps = {
    as: "nav",
    h: "64px",
    py: "8px",
    px: { xs: "8px", md: "14px", lg: "24px", xl: "100px" },
    backgroundColor: "dark-600",
    display: "flex",
    alignItems: "center",
  };

  /**
   * Renders
   */
  return (
    <>
      <XBox {...wrapperProps}>
        {/* Left */}
        <XBox w="143px" color="white">
          LOGO HERE
        </XBox>
        {/* Middle */}
        <XBox
          flex={1}
          px={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <XLink appearance="button" to="/" mx={2}>
            Home
          </XLink>
          <XLink to="/contact">Contact</XLink>
          <XLink to="/invalid-route">404</XLink>
        </XBox>
        {/* Right */}
        <XBox color="white">
          <XText>Sign In</XText>
        </XBox>
      </XBox>
    </>
  );
}

export { Navbar };
