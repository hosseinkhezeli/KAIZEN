'use client';
//@Mui
import {
    Container,
    LinearProgress,
    Skeleton,
    Stack,
    Typography,
} from '@mui/material';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Component & Methods
import useOverview from '@/app/[lang]/(main-section)/hooks/useOverview';
import BoardCard from '@/app/[lang]/(main-section)/components/overview/components/BoardCard';
import OverViewCard from '@/app/[lang]/(main-section)/components/overview/components/OverViewCard';
import { RepeatComponent } from '@utils/methods';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { TDashboard } from '@i18n/dictionary/types/dashboard';
import Box from '@mui/material/Box';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Overview = ({ dictionary }: { dictionary: TDashboard }) => {
    const { isLoadingDashboard, dashboardRes, overviewInfo, HEADER_HEIGHT } =
        useOverview();

    return (
        <>
            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Container>
                    <Typography variant={'h4'} fontWeight={400}>
                        {dictionary.overview}
                        <Typography variant={'subtitle1'} fontWeight={400}>
                            Effortlessly organize and prioritize your tasks to
                            boost productivity and achieve your goals.
                        </Typography>
                    </Typography>
                    <Box
                        sx={{
                            display: 'grid',
                            gap: 2,
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gridTemplateRows: '1fr 1fr',
                            gridAutoFlow: 'dense',
                            height: '100%',
                            overflowY: 'auto',
                        }}
                    >
                        <OverViewCard
                            title={dictionary.boards}
                            colSpan={'span 3'}
                            containerProps={{ height: '100%' }}
                        >
                            {!isLoadingDashboard ? (
                                <RepeatComponent
                                    times={1}
                                    render={(idx) => (
                                        <BoardCard
                                            boardInfo={undefined}
                                            isLoadingBoard={isLoadingDashboard}
                                            key={idx}
                                        />
                                    )}
                                />
                            ) : (
                                dashboardRes?.data?.map((boardInfo, idx) => (
                                    <BoardCard
                                        boardInfo={boardInfo}
                                        key={idx}
                                    />
                                ))
                            )}
                        </OverViewCard>
                        {/*<OverViewCard*/}
                        {/*    title={'Task Cards'}*/}
                        {/*    containerProps={{ sx: {} }}*/}
                        {/*>*/}
                        {/*    {isLoadingDashboard ? (*/}
                        {/*        <RepeatComponent*/}
                        {/*            times={3}*/}
                        {/*            render={(index) => (*/}
                        {/*                <Skeleton*/}
                        {/*                    key={index}*/}
                        {/*                    variant='rectangular'*/}
                        {/*                    width={'100%'}*/}
                        {/*                    height={'100%'}*/}
                        {/*                    sx={{*/}
                        {/*                        p: '8px 12px',*/}
                        {/*                        border: '1px solid',*/}
                        {/*                        borderColor: 'divider',*/}
                        {/*                        backgroundColor: 'grey.800',*/}
                        {/*                        borderRadius: 3,*/}
                        {/*                        flexBasis: {*/}
                        {/*                            xs: '100%',*/}
                        {/*                            sm: '50%',*/}
                        {/*                            md: '33%',*/}
                        {/*                        },*/}
                        {/*                        position: 'relative',*/}
                        {/*                        transition:*/}
                        {/*                            '0.3s ease border-color',*/}
                        {/*                        gap: 1,*/}
                        {/*                        ':hover': {*/}
                        {/*                            borderColor: 'primary.main',*/}
                        {/*                        },*/}
                        {/*                        minHeight: '18vw',*/}
                        {/*                    }}*/}
                        {/*                />*/}
                        {/*            )}*/}
                        {/*        />*/}
                        {/*    ) : (*/}
                        {/*        dashboardRes?.data*/}
                        {/*            ?.slice(0, 2)*/}
                        {/*            ?.map((boardInfo, idx) => (*/}
                        {/*                <BoardCard*/}
                        {/*                    boardInfo={boardInfo}*/}
                        {/*                    key={idx}*/}
                        {/*                />*/}
                        {/*            ))*/}
                        {/*    )}*/}
                        {/*</OverViewCard>*/}
                        {/*<OverViewCard title={'To-Do'} colSpan={'span 2'}>*/}
                        {/*    {isLoadingDashboard ? (*/}
                        {/*        <RepeatComponent*/}
                        {/*            times={3}*/}
                        {/*            render={(index) => (*/}
                        {/*                <Skeleton*/}
                        {/*                    key={index}*/}
                        {/*                    variant='rectangular'*/}
                        {/*                    width={'100%'}*/}
                        {/*                    height={'100%'}*/}
                        {/*                    sx={{*/}
                        {/*                        p: '8px 12px',*/}
                        {/*                        border: '1px solid',*/}
                        {/*                        borderColor: 'divider',*/}
                        {/*                        backgroundColor: 'grey.800',*/}
                        {/*                        borderRadius: 3,*/}
                        {/*                        flexBasis: {*/}
                        {/*                            xs: '100%',*/}
                        {/*                            sm: '50%',*/}
                        {/*                            md: '33%',*/}
                        {/*                        },*/}
                        {/*                        position: 'relative',*/}
                        {/*                        transition:*/}
                        {/*                            '0.3s ease border-color',*/}
                        {/*                        gap: 1,*/}
                        {/*                        ':hover': {*/}
                        {/*                            borderColor: 'primary.main',*/}
                        {/*                        },*/}
                        {/*                        minHeight: '18vw',*/}
                        {/*                    }}*/}
                        {/*                />*/}
                        {/*            )}*/}
                        {/*        />*/}
                        {/*    ) : (*/}
                        {/*        dashboardRes?.data?.map((boardInfo, idx) => (*/}
                        {/*            <BoardCard boardInfo={boardInfo} key={idx} />*/}
                        {/*        ))*/}
                        {/*    )}*/}
                        {/*</OverViewCard>*/}
                    </Box>
                </Container>
            </Stack>

            {isLoadingDashboard && (
                <LinearProgress
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        zIndex: 9999,
                    }}
                />
            )}
        </>
    );
};

export default Overview;
