declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true
    tablet: true
    laptop: true
    desktop: true
  }
  interface Palette {
    purple: Palette['primary']
    brown: Palette['primary']
    orange: Palette['primary']
    yellow: Palette['primary']
    green: Palette['primary']
    lightGrey: Palette['primary']
    lightYellow: Palette['primary']
    lightBrown: Palette['primary']
    lightWhite: Palette['primary']
    mediumGrey: Palette['primary']
    lightPurple: Palette['primary']
    midGrey: Palette['primary']
    lowOpacityGrey: Palette['primary']
    lowOpacityPurple: Palette['primary']
    lowOpacityYellow: Palette['primary']
    lowOpacityWhite: Palette['primary']
    blue: Palette['primary']
    emerald: Palette['primary']
    lightGreen: Palette['primary']
    darkGreen: Palette['primary']
    lightOrange: Palette['primary']
    warmBrown: Palette['primary']
    purple50: Palette['primary']
    darkOrange: Palette['primary']
    darkPurple: Palette['primary']
  }
  interface PaletteOptions {
    purple?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
    brown?: PaletteOptions['primary']
    yellow?: PaletteOptions['primary']
    green?: PaletteOptions['primary']
    lightGrey?: PaletteOptions['primary']
    lightYellow?: PaletteOptions['primary']
    lightBrown?: PaletteOptions['primary']
    lightWhite?: PaletteOptions['primary']
    mediumGrey?: PaletteOptions['primary']
    lightPurple?: PaletteOptions['primary']
    midGrey?: PaletteOptions['primary']
    lowOpacityGrey?: PaletteOptions['primary']
    lowOpacityPurple?: PaletteOptions['primary']
    lowOpacityYellow?: PaletteOptions['primary']
    lowOpacityWhite?: PaletteOptions['primary']
    blue?: PaletteOptions['primary']
    emerald?: PaletteOptions['primary']
    lightGreen?: PaletteOptions['primary']
    darkGreen?: PaletteOptions['primary']
    lightOrange?: PaletteOptions['primary']
    warmBrown?: PaletteOptions['primary']
    purple50?: PaletteOptions['primary']
    darkOrange?: PaletteOptions['primary']
    darkPurple?: PaletteOptions['primary']
  }
}

export {}
