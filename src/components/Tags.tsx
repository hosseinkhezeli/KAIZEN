import { Palette, styled, Typography } from '@mui/material';

function gradientLight(palette: Palette, color?: string) {
    switch (color) {
        case 'labels':
            return `linear-gradient(to bottom, ${'#FDCC80'}, ${'#E83509'})`;
        default:
            return `linear-gradient(to bottom, ${palette.grey[400]},70%, ${palette.grey[600]})`;
    }
}

export const Sticker = styled(Typography)(({ theme }) => ({
    ...theme.typography['caption'],
    color: theme.palette.grey[900],
    fontWeight: 700,
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 8px',
    borderRadius: '12px',
    width: 'max-content',
    height: 'max-content',
    background: gradientLight(theme.palette, 'stickers'),
    boxShadow: `inset 0 -5px 4px -2px ${theme.palette.grey[700]}, inset 0 5px 4px -2px ${theme.palette.grey[50]} `,
}));

export const Label = styled(Typography)(({ theme }) => ({
    ...theme.typography['caption'],
    color: '#5F0000',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 8px',
    borderRadius: '12px',
    width: 'max-content',
    height: 'max-content',
    background: gradientLight(theme.palette, 'labels'),
    boxShadow: `inset 0 -5px 4px -2px ${'#920F02'}, inset 0 5px 4px -2px ${'#F7F9F9'} `,
}));
