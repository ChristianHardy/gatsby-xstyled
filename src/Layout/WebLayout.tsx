import React from "react";
import { Navbar } from "../components";

export type WebLayoutProps = {
  children?: React.ReactNode;
};

function WebLayout(props: WebLayoutProps) {
  /**
   * Initializers
   */
  const { children } = props;

  /**
   * Renders
   */
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export { WebLayout };
