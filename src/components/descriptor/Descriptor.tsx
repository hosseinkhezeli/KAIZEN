//@3rd Party
import { FC, ReactNode } from 'react';
//______________________________________________________________


//@Mui
import Box from '@mui/material/Box';
import { BoxProps, Typography, TypographyProps } from '@mui/material';
//______________________________________________________________


export type TDescriptorProps = {
    title: ReactNode;
    description: ReactNode;
    wrapperProps?: BoxProps;
    titleProps?: TypographyProps;
    descriptionProps?: TypographyProps;
    withoutColon?: boolean;
};

const Descriptor: FC<TDescriptorProps> = ({
    title,
    description,
    wrapperProps,
    titleProps,
    descriptionProps,
    withoutColon = false,
}) => {
    return (
        <Box display={'flex'} alignItems={'baseline'} gap={1} {...wrapperProps}>
            <Typography
                variant={'caption'}
                color={'text.disabled'}
                {...titleProps}
            >
                {title + (!withoutColon ? ':' : ' ')}
            </Typography>
            <Typography variant={'body2'} {...descriptionProps}>
                {description}
            </Typography>
        </Box>
    );
};

export default Descriptor;
