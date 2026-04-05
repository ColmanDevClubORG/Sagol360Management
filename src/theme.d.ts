declare module '@mui/material/styles' {
  interface Palette {
    purple: Palette['primary']
    orange: Palette['primary']
    lightGrey: Palette['primary']
    mediumGrey: Palette['primary']
    midGrey: Palette['primary']
    lowOpacityPurple: Palette['primary']
    lowOpacityGrey: Palette['primary']
  }
  interface PaletteOptions {
    purple?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    lightGrey?: PaletteOptions['primary']
    mediumGrey?: PaletteOptions['primary']
    midGrey?: PaletteOptions['primary']
    lowOpacityPurple?: PaletteOptions['primary']
    lowOpacityGrey?: PaletteOptions['primary']
  }
}

export {}
