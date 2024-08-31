'use client';
//@Mui
import { Typography } from '@mui/material';

const RootError = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    return <Typography>Something went wrong!</Typography>;
};

export default RootError;
