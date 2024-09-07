//@3rd Party
import { FC } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Components
import OverviewChip from '@/app/[lang]/(main-section)/components/overview/components/OverviewChip';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
type TOverviewBarProps = {
    overviewInfo: {
        count: number | undefined;
        label: string;
    }[];
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const OverviewBar: FC<TOverviewBarProps> = ({ overviewInfo }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                p: { xs: '4px 8px', sm: '8px 12px' },
                borderRadius: 3,
                gap: { xs: 1, sm: 2 },
                border: '1px solid',
                borderColor: 'secondary.dark',
                backgroundColor: ({ palette }) =>
                    palette.secondary.light + '10',
                minHeight: { xs: 40, sm: 60 },
                width: { xs: '100%', sm: 'max-content' },
                alignSelf: { xs: 'center', sm: 'end' },
                justifyContent: { xs: 'space-evenly' },
            }}
        >
            {overviewInfo?.map((itemInfo, idx, arr) => (
                <>
                    <OverviewChip {...itemInfo} />
                    {idx !== arr.length - 1 && (
                        <Divider
                            orientation={'vertical'}
                            sx={{
                                borderStyle: 'dotted',
                                borderRightWidth: '2px',
                                height: '42px',
                            }}
                        />
                    )}
                </>
            ))}
        </Box>
    );
};

export default OverviewBar;
