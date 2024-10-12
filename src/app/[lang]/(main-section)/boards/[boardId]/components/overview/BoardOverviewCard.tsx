'use client';
//@3rd Party
import React, { FC, ReactNode } from 'react';
//_______________________________________________________________

//@MUI
import { Stack, StackProps, styled, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
//_______________________________________________________________

//@Components
import Descriptor, {
    TDescriptorProps,
} from '@components/descriptor/Descriptor';
import CustomCard from '@components/custom-card/CustomCard';
//_______________________________________________________________

//@Types
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
            <CardContainer>
                <Title>{title}</Title>
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
            </CardContainer>
        </CustomCard>
    );
};

export default BoardOverviewCard;

const CardContainer = styled(Stack)(({ theme }) => ({
    height: '100%',
    width: '100%',
    borderRadius: 24,
    gap: 4,
}));

const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.caption,
    fontWeight: 400,
}));
