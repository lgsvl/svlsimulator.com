import createPalette from '@material-ui/core/styles/createPalette';

const colors = {
  accent: {
    amaranthPink: '#F69BB2',
    lightCrimson: '#F16689',
    paradisePink: '#ED3866',
    crimson: '#D71345'
  },
  neutrals: {
    white: '#FFFFFF',
    azureishWhite: '#E2E8F4',
    lightSteelBlue: '#B6C5E4',
    slateGrey: '#6D7B97',
    yankeesBlue: '#1F2940',
    eerieBlack: '#141B2D'
  },
  semantic: {
    successGreen: '#7FB58A',
    successGreenDark: '#5A9C68',
    successGreenDarkest: '#3C6845',
    errorRed: '#DC7C7C',
    errorRedDark: '#CF4D4D',
    errorRedDarkest: '#A82D2D',
    infoBlue: '#66C4EB',
    infoBlueDark: '#3EB5E6',
    infoBlueDarkest: '#1785B3',
    warningYellow: '#F2C766',
    warningYellowDark: '#EEB83C',
    warningYellowDarkest: '#BE8910'
  }
};

export const palette = createPalette({
  primary: {
    main: colors.accent.paradisePink,
    dark: colors.accent.crimson,
    light: colors.accent.lightCrimson
    // contrastText: ''
  },
  secondary: {
    main: colors.neutrals.azureishWhite,
    dark: colors.neutrals.slateGrey,
    light: colors.neutrals.lightSteelBlue
    // contrastText: ''
  },
  text: {
    primary: colors.neutrals.white,
    secondary: colors.neutrals.lightSteelBlue
    // disabled: '',
    // hint: ''
  },
  background: {
    default: colors.neutrals.eerieBlack,
    paper: colors.neutrals.yankeesBlue
  },
  // divider: '',
  action: {
    active: colors.neutrals.lightSteelBlue,
    hover: colors.neutrals.slateGrey,
    // hoverOpacity: '',
    // selected: '',
    disabled: '#8F949F',
    disabledBackground: '#863052'
  },
  warning: {
    light: colors.semantic.warningYellow,
    main: colors.semantic.warningYellowDark,
    dark: colors.semantic.warningYellowDarkest
  },
  success: {
    light: colors.semantic.successGreen,
    main: colors.semantic.successGreenDark,
    dark: colors.semantic.successGreenDarkest
  },
  error: {
    light: colors.semantic.errorRed,
    main: colors.semantic.errorRedDark,
    dark: colors.semantic.errorRedDarkest
  },
  info: {
    light: colors.semantic.infoBlue,
    main: colors.semantic.infoBlueDark,
    dark: colors.semantic.infoBlueDarkest
  }
});
