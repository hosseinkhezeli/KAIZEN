import { FC, ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';

interface Props {
    children: ReactNode;
}

const CustomSnackbarProvider: FC<Props> = ({ children }) => {
    return (
        <SnackbarProvider
            style={{ fontFamily: 'inherit', direction: 'ltr' }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            // Components={{ error: CustomErrorSnackbar }}
        >
            {children}
        </SnackbarProvider>
    );
};

export default CustomSnackbarProvider;
