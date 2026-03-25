export {}

declare module '@mui/material/styles' {
  interface Palette {
    purple: Palette['primary']
    orange: Palette['primary']
    lightGrey: Palette['primary']
    black: Palette['primary']
  }
  interface PaletteOptions {
    purple?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    lightGrey?: PaletteOptions['primary']
    black?: PaletteOptions['primary']
  }
}
