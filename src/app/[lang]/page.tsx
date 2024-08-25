import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Home() {
    return (
        <Box>
            <Typography variant='h4'>Welcome to My App</Typography>
            <Typography variant='body1'>
                This is the main content area. The drawer overlays this content.
            </Typography>
        </Box>
    );
}
