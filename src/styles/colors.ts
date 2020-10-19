import createPalette from '@material-ui/core/styles/createPalette';

export const palette = createPalette({
  primary: {
    main: '#ED3866',
    dark: '#AB1138',
    light: '#D71345'
    // contrastText: ''
  },
  secondary: {
    main: '#C5C6CA',
    dark: '#5BCFAA',
    light: '#6D8B97'
    // contrastText: ''
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B6C5E4'
    // disabled: '',
    // hint: ''
  },
  background: {
    default: '#141A2D',
    paper: '#242A3D'
  },
  // divider: '',
  action: {
    // active: '',
    // hover: '',
    // hoverOpacity: '',
    // selected: '',
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
