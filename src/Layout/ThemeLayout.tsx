import {
  Preflight,
  ThemeProvider,
  createGlobalStyle,
  defaultTheme,
} from "@xstyled/styled-components";
import React from "react";
import { colorsPaletteObject } from "../design-system/helpers";

const GlobalStyle = createGlobalStyle`
    html {
        background-color: dark-800;
    }

    body {
        color: white;
    }
`;

const theme = {
  ...defaultTheme,
  // Customize your theme here
  colors: {
    ...defaultTheme.colors,
    ...colorsPaletteObject,
  },
};

export default function ThemeLayout({ children }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      {children}
    </ThemeProvider>
  );
}
