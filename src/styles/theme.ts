import { createMuiTheme, fade } from '@material-ui/core/styles';
import { palette } from './colors';

const fontMain = ['"Open Sans"', '"OpenSans-Bold"'].join(', ');

const theme = createMuiTheme({
  palette,
  // spacing: factor => `${8 * factor}px`,
  shape: {
    borderRadius: 8
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: palette.background.default
      }
    },
    MuiButton: {
      root: {
        fontFamily: fontMain,
        textTransform: 'none',
        padding: '12px 24px'
      },
      outlined: {
        borderColor: palette.secondary.main,
        color: palette.secondary.main,
        padding: '11px 23px'
      },
      outlinedPrimary: {
        borderColor: palette.text.primary
      },
      textPrimary: {
        color: palette.text.primary,
        '&:hover': {
          color: palette.primary.light,
          backgroundColor: fade(palette.secondary.main, 0.2)
        }
      },
      textSecondary: {
        color: palette.text.primary,
        '&:hover': {
          color: palette.text.secondary,
          backgroundColor: fade(palette.secondary.main, 0.2)
        }
      }
    },
    MuiDrawer: {
      root: {
        width: 240
      },
      paper: {
        width: 240
      }
    },
    MuiInputBase: {
      input: {
        borderRadius: 4,

        '&:-webkit-autofill': {
          '-webkit-text-fill-color': palette.text.secondary,
          'text-fill-color': palette.text.secondary,
          '-webkit-box-shadow': `0 0 0px 1000px ${fade(palette.background.paper, 0.95)} inset`,
          'box-shadow': `0 0 0px 1000px ${fade(palette.background.paper, 0.95)} inset`,
          transition: 'background-color 0.25s ease-in-out'
        }
      }
    },
    MuiInputLabel: {
      root: {
        color: palette.text.secondary,

        '&$focused': {
          color: palette.text.primary
        }
      }
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: fade(palette.secondary.main, 0.2)
        }
      }
    },
    // MuiLink: {
    //   root: {
    //     color: palette.secondary.dark
    //   }
    // },
    MuiOutlinedInput: {
      root: {
        backgroundColor: palette.background.paper,
        borderRadius: 4,
        '&:hover $notchedOutline': {
          borderColor: palette.action.hover
        },
        '&$focused $notchedOutline': {
          borderColor: palette.action.active,
          borderWidth: 1
        }
      },
      notchedOutline: {
        borderColor: 'transparent'
      }
    },
    MuiPaper: {
      // root: {
      //   border: '1px dashed darkgoldenrod'
      // },
      rounded: {
        borderRadius: '8px' // spacing(1)
      },
      // Reserving elevation24 for the 'page content' area, the body of most pages.
      elevation0: {
        backgroundColor: 'transparent'
      },
      elevation24: {
        boxShadow: '0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 16px 24px rgba(0, 0, 0, 0.06)'
      }
    },
    MuiTab: {
      root: {
        paddingBottom: 0,
        fontSize: '16px',
        lineHeight: '24px',
        textTransform: 'none',
        '&$selected': {
          color: '#FFFFFF'
        }
      }
    },
    MuiTableCell: {
      root: {
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        fontFamily: fontMain
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 12,
        backgroundColor: palette.background.default,
        color: palette.text.secondary,
        border: `1px solid ${palette.background.default}`
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: 40,
        marginTop: 40, // It's not technically "correct" to set this here, but
        // it's mostly appropriate as long as the rule below is present too.

        '&:first-child': {
          marginTop: 0
        }
      }
    }
  },
  typography: {
    fontFamily: fontMain,

    h1: {
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 96 / 64,
      textAlign: 'center'
    },
    h2: {
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 84 / 56
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 44 / 32
    },
    h4: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 36 / 28
    },
    h5: {
      color: palette.text.primary,
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 32 / 20
    },
    h6: {
      color: palette.text.secondary,
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 36 / 28
    },
    body1: {
      color: palette.secondary.main,
      fontSize: 18,
      lineHeight: 28 / 18
    },
    body2: {
      fontSize: 14,
      lineHeight: 24 / 14
    },
    // button: {
    // },
    caption: {
      fontSize: 16,
      lineHeight: 24 / 16
    },
    overline: {
      // color: palette.text.hint,
      fontSize: 14,
      lineHeight: 24 / 14,
      letterSpacing: '2px',
      textTransform: 'uppercase'
    }
    // subtitle1: {
    // },
    // subtitle2: {
    // }
  }
});

const mobileBreakpoint = theme.breakpoints.down('sm');

// This sets the root Toolbar element's minHeight, but its overridden by breakpoints.
// Will need to figure out how to 'properly' override those or recreate them.
theme.mixins.toolbar.minHeight = 80;

//
// 'Mobile' Sizing
//
theme.typography.h1[mobileBreakpoint] = {
  fontSize: 40,
  lineHeight: 52 / 40
};
theme.typography.h2[mobileBreakpoint] = {
  fontSize: 32,
  lineHeight: 48 / 32
};
theme.typography.h3[mobileBreakpoint] = {
  fontSize: 24,
  lineHeight: 36 / 24
};
theme.typography.h4[mobileBreakpoint] = {
  fontSize: 20,
  lineHeight: 32 / 20
};
theme.typography.h5[mobileBreakpoint] = {
  fontSize: 16,
  lineHeight: 28 / 16
};
// theme.typography.h6[mobileBreakpoint] = {
//   fontSize: 40,
//   lineHeight: 1.3
// };

export { theme };
