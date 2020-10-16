import createPalette from '@material-ui/core/styles/createPalette';

export const palette = createPalette({
  primary: {
    main: '#ED3866',
    dark: '#AB1138',
    light: '#D71345'
  },
  secondary: {
    main: '#729BFC',
    dark: '#5BCFAA',
    light: '#6D8B97'
  },
  text: {
    primary: '#9CAED2',
    secondary: '#FFFFFF'
    //   slateGrey: '#6D7B97',
    //   steelBlue: '#CED8ED',
    //   lightSteelBlue: '#B6C5E4',
    //   azureishWhite: '#E2E8F4'
  },
  background: {
    //   light: '#6D7B97',
    default: '#1F2940'
    //   secondary: '#FFFFFF',
    //   main: '#141B2D',
    //   assetGrouping: 'rgba(20, 27, 45, 0.2)'
  },
  action: {
    disabled: '#8F949F',
    disabledBackground: '#863052'
  },
  warning: {
    light: '#F2C766',
    main: '#CF4D4D',
    dark: '#FC6565'
  },
  success: {
    light: '#7FB58A',
    main: '#4CAF50',
    dark: '#5A9C68;'
  },
  error: {
    light: '#DC7C7C',
    main: '#F44336',
    dark: '#C22525'
  },
  info: {
    light: '#66C4EB',
    main: '#f38a21',
    dark: '#1976d2'
  }
});
