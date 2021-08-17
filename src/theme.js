import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        color: "hsl(223, 47%, 23%)",
      },
    },
  },
  colors: {
    brand: {
      100: "hsl(225, 100%, 98%)",
      200: "hsl(225, 100%, 94%)",
      300: "hsl(224, 23%, 55%)",
      400: "hsl(245, 75%, 52%)",
      500: "hsl(223, 47%, 23%)",
    },
    brandH: {
      100: "hsl(245, 83%, 68%)",
    },
  },
  fonts: {
    body: "Red Hat Display",
    heading: "Red Hat Display",
  },
});

export default theme;
