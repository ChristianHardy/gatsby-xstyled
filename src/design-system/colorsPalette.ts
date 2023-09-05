/**
 * Defines the color palette for the application.
 *
 * @remarks
 * The `colorsPalette` object should be used to define all colors used in the application. Each color should be defined as a key-value pair, where the key is the name of the color and the value is an object containing shades of that color. Each shade should be defined as a key-value pair, where the key is the shade number and the value is the hex code for that shade.
 *
 * @example
 * ```
 * const colorsPalette = {
 *   blue: {
 *     100: '#2738f5',
 *     200: '#1e2ab8',
 *     300: '#16208a',
 *   },
 *   green: {
 *     100: '#2ed573',
 *     200: '#1db954',
 *     300: '#10a345',
 *   },
 * };
 * ```
 *
 * The `colorsPalette` object will be used to generate the theme for the application. Please ensure that each color is unique and not used twice.
 *
 * @output
 * ```
 * dark-600: #080f22
 * dark-800: #00071b
 * blue-100: #2738f5
 * ```
 */
export const colorsPalette = {
  dark: {
    600: "#080f22",
    800: "#00071b",
  },
  blue: {
    100: "#2738f5",
  },
  "dark-blue": {
    100: "#515fff",
    200: "#4a3fff",
  },
};
