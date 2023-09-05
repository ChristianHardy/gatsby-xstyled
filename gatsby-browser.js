import React from "react";
import ThemeLayout from "./src/Layout/ThemeLayout";

export const wrapRootElement = ({ element }) => {
  return <ThemeLayout>{element}</ThemeLayout>;
};
