import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const shadows = {
  first: "1px  1px 10px 1px white",
};
const colors = {
  primary: "#E94560",
};
const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FAF3E3", "#3E497A")(props),
    },
  }),
};
const theme = extendTheme({ config, shadows, colors, styles });

export default theme;
