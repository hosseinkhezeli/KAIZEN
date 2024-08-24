import { Components, Theme } from '@mui/material/styles';
import { TextFieldProps } from '@mui/material';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
    defaultProps: { size: 'small' },
    styleOverrides: {
        root: ({ theme, ownerState }) => {
            const mainColor = () => {
                if (ownerState.color satisfies TextFieldProps['color'])
                    return theme.palette[ownerState?.color ?? 'primary'].main;
            };
            return {
                borderRadius: '8px !important',
                input: {
                    ...theme.typography.body2,
                },
                //Line under Filled TextField
                '&::before': { display: 'none' },
                '&::after': { display: 'none' },
                '.MuiOutlinedInput-notchedOutline': {
                    transition: '0.2s ease all',
                    borderWidth: '1px !important',
                },
                ':hover': {
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: mainColor?.() + 'cc !important',
                    },
                },
            };
        },
    },
};
