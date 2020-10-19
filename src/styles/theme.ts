import { createMuiTheme } from '@material-ui/core/styles';
// import { hexOpacity } from 'src/utils/utils';
import { palette } from './colors';

const theme = createMuiTheme({
  palette,
  spacing: factor => `${8 * factor}px`,
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: palette.background.default
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
        backgroundColor: palette.background.default,
        borderRadius: 4,
        '&:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0 100px ${palette.background.default} inset`,
          WebkitTextFillColor: '#fff',
          caretColor: '#fff'
        }
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
    MuiButton: {
      root: {
        textTransform: 'none'
      },
      outlined: {
        borderColor: palette.secondary.main,
        color: palette.secondary.main
      },
      outlinedPrimary: {
        borderColor: palette.text.primary
      }
    },
    // MuiToggleButton: {
    //   root: {
    //     backgroundColor: 'transparent',
    //     color: palette.text.primary,
    //     textTransform: 'none',
    //     '&$selected': {
    //       backgroundColor: palette.primary.main,
    //       color: palette.text.secondary,
    //       '&:hover': {
    //         backgroundColor: palette.primary.dark
    //       }
    //     }
    //   }
    // },
    MuiSlider: {
      root: {
        color: palette.primary.main,
        height: 2,
        padding: '15px 0 30px'
      },
      thumb: {
        height: 14,
        width: 14,
        backgroundColor: palette.background.default,
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
        marginTop: -5,
        marginLeft: -5,
        '&:focus, &:hover, &$active': {
          boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'
          }
        }
      },
      markLabel: {
        top: -22,
        color: palette.text.primary
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% - 2px)',
        top: -32
      },
      track: {
        height: 8
      },
      marked: {
        marginBottom: -24
      },
      mark: { background: 'transparent' },
      rail: {
        height: 8,
        opacity: 0.5,
        backgroundColor: palette.background.default
      },
      markActive: {
        opacity: 1,
        backgroundColor: 'currentColor'
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
      // root: {
      //   // Added important to prevent ovverride by sub classes of Typography
      //   fontFamily: 'Open Sans !important'
      // },
      body1: {
        fontFamily: 'Open Sans',
        color: palette.secondary.main
      },
      body2: {
        fontFamily: 'Open Sans'
      },
      h5: {
        color: palette.text.primary,
        fontFamily: 'Open Sans',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 1.3
      },
      h6: {
        color: palette.text.secondary,
        fontFamily: 'Open Sans',
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.15
      }
    },
    MuiPaper: {
      // root: {
      //   backgroundColor: palette.background.default
      // },
      rounded: {
        borderRadius: '8px' // spacing(1)
      },
      // Reserving elevation24 for the "page content" area, the body of most pages.
      elevation24: {
        boxShadow: '0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 16px 24px rgba(0, 0, 0, 0.06)'
      }
    },
    // MuiPickersDay: {
    //   day: {
    //     color: palette.text.azureishWhite
    //   },
    //   daySelected: {
    //     backgroundColor: palette.primary.main
    //   },
    //   dayDisabled: {
    //     color: `${palette.text.azureishWhite}${hexOpacity(0.2)}`
    //   }
    // },
    MuiPopover: {
      paper: {
        marginTop: 8,
        backgroundColor: '#293247'
      }
    },
    // MuiTreeItem: {
    //   iconContainer: {
    //     width: 24
    //   }
    // },
    MuiStepConnector: {
      line: {
        borderColor: palette.text.primary
      }
    },
    // MuiPickersCalendarHeader: {
    //   dayLabel: {
    //     color: palette.text.azureishWhite
    //   },
    //   iconButton: {
    //     color: palette.text.slateGrey,
    //     backgroundColor: 'transparent'
    //   }
    // },
    MuiListItemIcon: {
      root: {
        minWidth: '33px'
      }
    }
    // MuiPickersModal: {
    //   dialogRoot: {
    //     backgroundColor: palette.background.main
    //   }
    // }
  }
});

// theme.typography.h3 = {
//   fontSize: '32px',
//   fontWeight: 'bold',
//   [theme.breakpoints.down('xs')]: {
//     fontSize: '24px'
//   }
// };

export { theme };
