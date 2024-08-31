import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function NotFoundCatchAll() {
    return (
        <Box
            width='100%'
            height='100%'
            display={'flex'}
            flexDirection={'column'}
            sx={{ placeContent: 'center', alignItems: 'center' }}
        >
            <Typography
                style={{
                    fontSize: '95px',
                    letterSpacing: '-20px',
                    fontWeight: 900,
                    opacity: '0.1',
                }}
            >
                404
            </Typography>
            <Typography
                style={{
                    fontSize: '95px',
                    letterSpacing: '-20px',
                    fontWeight: 900,
                    opacity: '0.5',
                }}
            >
                404
            </Typography>
            <Typography
                style={{
                    fontSize: '95px',
                    letterSpacing: '-20px',
                    fontWeight: 900,
                }}
            >
                404
            </Typography>
            <Typography mt={'1rem'}>
                Well, this page must’ve gone for a coffee break! ☕
            </Typography>
        </Box>
    );
}
