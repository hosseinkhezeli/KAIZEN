import React, { FC } from 'react';
import { Stack, Typography } from '@mui/material';

import { SwatchIcon, TagIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@mui/material/styles';

type TBoardLabelsStickerProps = {
    stickers: string[] | undefined;
    labels: string[] | undefined;
};
const BoardLabelsSticker: FC<TBoardLabelsStickerProps> = ({
    stickers,
    labels,
}) => {
    const { palette } = useTheme();
    function gradientLight(color?: string | undefined) {
        switch (color) {
            case 'labels':
                return `linear-gradient(to bottom, ${'#FDCC80'}, ${'#E83509'})`;
            default:
                return `linear-gradient(to bottom, ${palette.grey[400]},70%, ${palette.grey[600]})`;
        }
    }

    return (
        <Stack
            flexDirection={'row'}
            gap={1}
            flexWrap={'wrap'}
            sx={{ userSelect: 'none', cursor: 'default' }}
        >
            {stickers?.map((sticker, idx) => (
                <Typography
                    key={idx}
                    variant={'caption'}
                    color={palette.grey[900]}
                    fontWeight={700}
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        p: '4px 8px',
                        borderRadius: '12px',
                        width: 'max-content',
                        height: 'max-content',
                        background: gradientLight(),
                        boxShadow: `inset 0 -5px 4px -2px ${palette.grey[700]}, inset 0 5px 4px -2px ${palette.grey[50]} `,
                    }}
                >
                    <TagIcon width={20} height={20} color={palette.grey[900]} />
                    {sticker}
                </Typography>
            ))}

            {labels?.map((label, idx) => (
                <Typography
                    key={idx}
                    fontWeight={700}
                    variant={'caption'}
                    color={'#5F0000'}
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        p: '4px 8px',
                        borderRadius: '12px',
                        width: 'max-content',
                        height: 'max-content',
                        background: gradientLight('labels'),
                        boxShadow: `inset 0 -5px 4px -2px ${'#920F02'}, inset 0 5px 4px -2px ${'#F7F9F9'} `,
                    }}
                >
                    <SwatchIcon width={20} height={20} color={'#5F0000'} />
                    {label}
                </Typography>
            ))}
        </Stack>
    );
};

export default BoardLabelsSticker;
