import { Slide, SlideProps } from '@mui/material';
import { Components, Theme } from '@mui/material/styles';
import { getColorByOwnerProps, TColorKeys } from '@utils/methods';

export const MuiSnackbar: Components<Theme>['MuiSnackbar'] = {
    defaultProps: {
        autoHideDuration: 4000,
        TransitionComponent: SlideTransition,
    },
    styleOverrides: {
        root: ({ ownerState, theme }) => ({
            backgroundColor: getColorByOwnerProps(
                ownerState.color as TColorKeys,
                theme,
                '80',
            ),
        }),
    },
};
function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction='up' />;
}
