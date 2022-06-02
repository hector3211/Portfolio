import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const shadows = {
  first: "1px  1px 15px 1px white",
};
const colors = {
  primary: "#E94560",
};

const theme = extendTheme({ config, shadows, colors });

export default theme;
