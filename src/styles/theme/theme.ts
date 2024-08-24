import { createTheme, PaletteMode, PaletteOptions } from '@mui/material';
import { MuiIconButton } from '@styles/theme/components/Button/IconButton';
import { MuiButton } from '@styles/theme/components/Button/MuiButton';
import { MuiButtonBase } from '@styles/theme/components/Button/MuiButtonBase';
import { MuiCssBaseline } from '@styles/theme/components/CssBaseline/MuiCssBaseline';
import { MuiInputLabel } from '@styles/theme/components/Label/MuiInputLabel';
import { MuiInputBase } from '@styles/theme/components/TextField/MuiInputBase';
import { typography } from '@styles/theme/components/Typography';
import { MuiTypography } from '@styles/theme/components/Typography/MuiTypography/MuiTypography';
import { lightPalette } from './palette/light/lightPalette';
import { darkPalette } from './palette/dark/darkPalette';

// Define the return type of getDesignTokens
const getDesignTokens = (mode: PaletteMode): PaletteOptions => ({
  mode,
  ...(mode === 'light' ? lightPalette : darkPalette),
});

// Create the custom theme function
export const customTheme = (mode: PaletteMode | undefined, isRtl: boolean) =>
  createTheme({
    palette: getDesignTokens(mode ?? 'light'),
    typography,
    direction: isRtl ? 'rtl' : 'ltr',
    components: {
      MuiButtonBase,
      MuiButton,
      MuiTypography,
      MuiCssBaseline,
      MuiInputBase,
      MuiInputLabel,
      MuiIconButton,
    },
  });

export default customTheme;
