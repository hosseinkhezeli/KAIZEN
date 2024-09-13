import React, { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { getRandomColorKey } from '@utils/methods';
import { SwatchIcon, TagIcon } from '@heroicons/react/24/outline';

type TBoardLabelsStickerProps = {
    stickers: string[] | undefined;
    labels: string[] | undefined;
};
const BoardLabelsSticker: FC<TBoardLabelsStickerProps> = ({
    stickers,
    labels,
}) => {
    return (
        <Stack flexDirection={'row'} gap={1} flexWrap={'wrap'}>
            {stickers?.map((sticker, idx) => (
                <Typography
                    key={idx}
                    bgcolor={`${getRandomColorKey()}.light`}
                    variant={'caption'}
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        p: '4px 8px',
                        borderRadius: '8px',
                        width: 'max-content',
                        height: 'max-content',
                    }}
                >
                    <TagIcon width={20} height={20} />
                    {sticker}
                </Typography>
            ))}
            {labels?.map((label, idx) => (
                <Typography
                    key={idx}
                    bgcolor={`${getRandomColorKey()}.dark`}
                    variant={'caption'}
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        p: '4px 8px',
                        borderRadius: '8px',
                        width: 'max-content',
                        height: 'max-content',
                    }}
                >
                    <SwatchIcon width={20} height={20} />
                    {label}
                </Typography>
            ))}
        </Stack>
    );
};

export default BoardLabelsSticker;
