import {Components, Theme} from "@mui/material/styles";

export const MuiTypography: Components<Theme>['MuiTypography'] = {
  styleOverrides: {
    root: () => ({
      textAlign: 'initial',
    }),
  },
};
