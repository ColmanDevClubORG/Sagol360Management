declare module '@mui/material/styles' {
  interface Palette {
    purple: Palette['primary']
    orange: Palette['primary']
    lightGrey: Palette['primary']
    mediumGrey: Palette['primary']
    customGrey: Palette['primary']
    lowOpacityPurple: Palette['primary']
  }
  interface PaletteOptions {
    purple?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    lightGrey?: PaletteOptions['primary']
    mediumGrey?: PaletteOptions['primary']
    customGrey?: PaletteOptions['primary']
    lowOpacityPurple?: PaletteOptions['primary']
  }
}

export {}
