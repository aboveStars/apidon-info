import { extendBaseTheme } from "@chakra-ui/react";

export const theme = extendBaseTheme({
  styles: {
    global: () => ({
      body: {
        bg: "black",
      },
    }),
  },
});
