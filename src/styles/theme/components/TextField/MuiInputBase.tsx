import { Components, Theme } from '@mui/material/styles';
import { getColorByOwnerProps } from '@utils/methods';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
    defaultProps: { size: 'small' },
    styleOverrides: {
        root: ({ theme, ownerState }) => {
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
                        borderColor: getColorByOwnerProps?.(
                            ownerState.color,
                            theme,
                            'cc !important',
                        ),
                    },
                },
            };
        },
    },
};
