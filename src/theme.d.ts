declare module '@mui/material/styles' {
  interface Palette {
    purple: Palette['primary']
    orange: Palette['primary']
    lightGrey: Palette['primary']
    mediumGrey: Palette['primary']
    midGrey: Palette['primary']
    lowOpacityPurple: Palette['primary']
    yellow: Palette['primary']
    brown: Palette['primary']
    lightBrown: Palette['primary']
    lowOpacityYellow: Palette['primary']
    lightYellow: Palette['primary']
  }
  interface PaletteOptions {
    purple?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    lightGrey?: PaletteOptions['primary']
    mediumGrey?: PaletteOptions['primary']
    midGrey?: PaletteOptions['primary']
    lowOpacityPurple?: PaletteOptions['primary']
    yellow?: PaletteOptions['primary']
    brown?: PaletteOptions['primary']
    lightBrown?: PaletteOptions['primary']
    lowOpacityYellow?: PaletteOptions['primary']
    lightYellow?: PaletteOptions['primary']
  }
}

export {}