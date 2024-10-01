//@3rd Party
import { FC, ReactNode } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Divider, Typography, Stack, StackProps } from '@mui/material';
import CustomCard from '@components/custom-card/CustomCard';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
type TOverViewCardProps = {
    title?: string;
    colSpan?: string;
    rowSpan?: string;
    containerProps?: StackProps;
    children: ReactNode;
    header?: ReactNode;
    backgroundColor?: (theme: Theme) => string | string;
    borderColor?: (theme: Theme) => string | string;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const OverViewCard: FC<TOverViewCardProps> = ({
    title,
    children,
    header,
    colSpan,
    rowSpan,
    containerProps,
    backgroundColor,
    borderColor,
}) => {
    return (
        <CustomCard
            outerBoxProps={{
                sx: {
                    gridColumn: colSpan,
                    gridRow: rowSpan,
                    height: '100%',
                    background: borderColor,
                },
            }}
            innerBoxProps={{
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    p: '16px 16px',
                    gap: 1.5,
                    height: '100%',
                    background: backgroundColor,
                },
            }}
        >
            {(title || header) && (
                <>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Typography
                            variant={'h6'}
                            fontWeight={400}
                            lineHeight={'100%'}
                            fontSize={20}
                        >
                            {title}
                        </Typography>
                        {header}
                    </Box>
                    <Divider />
                </>
            )}
            <Stack
                gap={2}
                overflow={'auto'}
                height={'100%'}
                {...containerProps}
            >
                {children}
            </Stack>
        </CustomCard>
    );
};

export default OverViewCard;
