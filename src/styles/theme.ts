import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: {
      "900": "#FFFFFF",
      "500": "#F5F8FA",
    },
    gray: {
      "600": "#999999",
      "300": "#47585B",
      "100": "#DADADA",
    },
    black: {
      "900": "#000000",
    },
    yellow: {
      "900": "#FFBA08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    mono: "Barlow",
  },
  styles: {
    global: {
      body: {
        bg: "white.100",
        color: "gray.300",
      },
    },
  },
});
