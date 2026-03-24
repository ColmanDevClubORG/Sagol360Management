export {}

declare module '@mui/material/styles' {
  interface Palette {
    purple: Palette['primary']
    orange: Palette['primary']
  }
  interface PaletteOptions {
    purple?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
  }
}
