import { createTheme, MantineColorsTuple } from "@mantine/core";

const tawnyPort: MantineColorsTuple = [
  "#f9f0f2",
  "#ecdfe1",
  "#dbbabf",
  "#cc939b",
  "#be727d",
  "#b75e6a",
  "#b45360",
  "#9e4450",
  "#8e3b47",
  "#7d303c",
];

const mineShaft: MantineColorsTuple = [
  "#f5f5f5",
  "#e7e7e7",
  "#cdcdcd",
  "#b1b1b1",
  "#9a9a9a",
  "#8b8b8b",
  "#838383",
  "#717171",
  "#646464",
  "#585656",
];

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    tawnyPort,
    mineShaft,
  },
  fontFamily: "JetBrains Mono, monospace",
  primaryColor: "tawnyPort",
});
