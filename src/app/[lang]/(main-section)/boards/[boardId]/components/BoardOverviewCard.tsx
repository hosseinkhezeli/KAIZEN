import React, { FC, ReactNode } from 'react';
import { Divider, Stack, StackProps, Typography } from '@mui/material';
import Descriptor, {
    TDescriptorProps,
} from '@components/descriptor/Descriptor';

type TBoardOverviewCardProps = {
    title: ReactNode;
    descriptionArr?: TDescriptorProps[];
    children?: ReactNode;
    wrapperProps?: StackProps;
    color?: string;
};

const BoardOverviewCard: FC<TBoardOverviewCardProps> = ({
    title,
    descriptionArr,
    children,
    wrapperProps,
    color,
}) => {
    return (
        <Stack
            sx={{
                height: '100%',
                width: '100%',
                borderRadius: '8px',
                border: '1px solid',
                padding: '8px 16px',
                borderColor: color || 'divider',
                gap: 1,
            }}
            bgcolor={({ palette }) => palette.background.paper}
            {...wrapperProps}
        >
            <Typography
                variant={'caption'}
                fontWeight={400}
                color={color || 'grey.600'}
            >
                {title}
            </Typography>
            <Divider
                sx={{
                    borderStyle: 'dotted',
                    borderBottomWidth: '2px',
                }}
            />
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
    );
};

export default BoardOverviewCard;
