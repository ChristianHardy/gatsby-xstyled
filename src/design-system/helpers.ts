import { colorsPalette } from "./colorsPalette";

/**
 * This function create the colors palette object.
 * Please do not modify this function.
 */
export const colorsPaletteObject: any = Object.entries(colorsPalette).reduce(
  (result, [colorKey, subPalette]) => ({
    ...result,
    ...Object.entries(subPalette).reduce(
      (subResult, [subKey, subValue]) => ({
        ...subResult,
        [`${colorKey}-${subKey}`]: subValue,
      }),
      {},
    ),
  }),
  {},
);
