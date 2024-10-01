import React, { FC, ReactNode } from 'react';
import { Stack, StackProps, Typography } from '@mui/material';
import Descriptor, {
    TDescriptorProps,
} from '@components/descriptor/Descriptor';
import CustomCard from '@components/custom-card/CustomCard';
import { Theme } from '@mui/material/styles';

type TBoardOverviewCardProps = {
    title: ReactNode;
    descriptionArr?: TDescriptorProps[];
    children?: ReactNode;
    wrapperProps?: StackProps;
    background?: (theme: Theme) => string;
};

const BoardOverviewCard: FC<TBoardOverviewCardProps> = ({
    title,
    descriptionArr,
    children,
    wrapperProps,
    background,
}) => {
    return (
        <CustomCard
            outerBoxProps={{
                ...wrapperProps,
                sx: [
                    { height: '100%', width: '100%' },
                    ...(Array.isArray(wrapperProps?.sx)
                        ? wrapperProps?.sx
                        : [wrapperProps?.sx]),
                ],
            }}
            innerBoxProps={{ sx: { background: background } }}
        >
            <Stack
                sx={{
                    height: '100%',
                    width: '100%',
                    borderRadius: '24px',
                    gap: 1,
                }}
            >
                <Typography variant={'caption'} fontWeight={400}>
                    {title}
                </Typography>

                {descriptionArr?.map((item, idx) => (
                    <Descriptor
                        key={idx}
                        title={item.title}
                        description={item.description}
                        descriptionProps={{
                            sx: {
                                maxHeight: 96,
                                overflowY: 'overlay',
                            },
                        }}
                    />
                ))}
                {children}
            </Stack>
        </CustomCard>
    );
};

export default BoardOverviewCard;
