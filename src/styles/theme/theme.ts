import { createTheme, PaletteMode, PaletteOptions } from '@mui/material';
import { MuiAppBar } from '@styles/theme/components/AppBar/MuiAppBar';
import { MuiBottomNavigation } from '@styles/theme/components/BottomNavigation/MuiBottomNavigation';
import { MuiBottomNavigationAction } from '@styles/theme/components/BottomNavigation/MuiBottomNavigationAction';
import { MuiIconButton } from '@styles/theme/components/Button/IconButton';
import { MuiButton } from '@styles/theme/components/Button/MuiButton';
import { MuiButtonBase } from '@styles/theme/components/Button/MuiButtonBase';
import { MuiCssBaseline } from '@styles/theme/components/CssBaseline/MuiCssBaseline';
import { MuiInputLabel } from '@styles/theme/components/Label/MuiInputLabel';
import { MuiList } from '@styles/theme/components/List/MuiList';
import { MuiListItem } from '@styles/theme/components/List/MuiListItem';
import { MuiListItemButton } from '@styles/theme/components/List/MuiListItemButton';
import { MuiListItemIcon } from '@styles/theme/components/List/MuiListItemIcon';
import { MuiListItemText } from '@styles/theme/components/List/MuiListItemText';
import { MuiInputBase } from '@styles/theme/components/TextField/MuiInputBase';
import { MuiTooltip } from '@styles/theme/components/Tooltip/MuiTooltip';
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
      MuiAppBar,
      MuiBottomNavigation,
      MuiBottomNavigationAction,
      MuiList,
      MuiListItem,
      MuiListItemButton,
      MuiListItemIcon,
      MuiListItemText,
      MuiTooltip,
    },
  });

export default customTheme;
