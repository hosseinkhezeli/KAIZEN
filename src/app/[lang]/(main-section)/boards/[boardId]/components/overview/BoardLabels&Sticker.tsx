'use client';
//@3rd Party
import React, { FC } from 'react';
//_______________________________________________________________

//@MUI
import { Box, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//_______________________________________________________________

//@Assets
import { SwatchIcon, TagIcon } from '@heroicons/react/24/outline';
import { Label, Sticker } from '@/components/Tags';
//_______________________________________________________________

//@Types
type TBoardLabelsStickerProps = {
    stickers: string[] | undefined;
    labels: string[] | undefined;
};
//_______________________________________________________________

const BoardLabelsSticker: FC<TBoardLabelsStickerProps> = ({
    stickers,
    labels,
}) => {
    const { palette } = useTheme();
    return (
        <Container>
            {stickers?.map((sticker, idx) => (
                <Sticker key={idx}>
                    <TagIcon width={20} height={20} color={palette.grey[900]} />
                    {sticker}
                </Sticker>
            ))}

            {labels?.map((label, idx) => (
                <Label key={idx}>
                    <SwatchIcon width={20} height={20} color={'#5F0000'} />
                    {label}
                </Label>
            ))}
        </Container>
    );
};

export default BoardLabelsSticker;

const Container = styled(Box)(() => ({
    display: 'flex',
    gap: 4,
    flexWrap: 'wrap',
    userSelect: 'none',
    cursor: 'default',
}));
