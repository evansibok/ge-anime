import { extendTheme } from "@chakra-ui/react";
import { theme as baseTheme } from "@saas-ui/react";

const themConfig = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: "#1f2937",
    yellow: "#fbbf24",
    red: "#d00b00",
    green: "#10b981",
    indigo: "#6d5ace",
    blue: "#1e3a8a",
    appBg: "#1A202C",
  },
  styles: {
    global: {
      "html, body": {
        height: "100%",
        background: "appBg",
        color: "white",
      },
      "*": {
        boxSizing: "border-box",
        padding: "0px",
        margin: "0px",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
};

const theme = extendTheme(themConfig, baseTheme);

export default theme;
