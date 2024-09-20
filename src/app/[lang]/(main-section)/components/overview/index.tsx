'use client';
//@Mui
import { Container, LinearProgress, Stack, Typography } from '@mui/material';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Component & Methods
import useOverview from '@/app/[lang]/(main-section)/hooks/useOverview';
import BoardCard from '@/app/[lang]/(main-section)/components/overview/components/BorderCard';
import OverViewCard from '@/app/[lang]/(main-section)/components/overview/components/OverViewCard';
import { RepeatComponent } from '@utils/methods';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { TDashboard } from '@i18n/dictionary/types/dashboard';
import Box from '@mui/material/Box';
import EventCard from '@/app/[lang]/(main-section)/components/overview/components/EventCard';
import EventCardHeader from '@/app/[lang]/(main-section)/components/overview/components/EventCard/EventCardHeader';
import { EventCardProvider } from '@/app/[lang]/(main-section)/components/overview/components/EventCard/hooks/useEventCard';
import { Theme } from '@mui/material/styles';
import AdsCard from '@/app/[lang]/(main-section)/components/overview/components/AdsCard/AdsCard';
import TimeCard from '@/app/[lang]/(main-section)/components/overview/components/TimeCard/TimeCard';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Overview = ({ dictionary }: { dictionary: TDashboard }) => {
    const { isLoadingDashboard, dashboardRes, overviewInfo } = useOverview();
    const HEADER_HEIGHT = document?.getElementById('breadcrumbs')?.clientHeight;

    return (
        <>
            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    p: '1rem 0 2rem',
                    height: `calc(100vh - ${HEADER_HEIGHT || 53}px)`,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Container
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        height: '100%',
                    }}
                >
                    <Typography
                        variant={'h1'}
                        component={'h3'}
                        fontWeight={400}
                    >
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
                            gridTemplateRows: '1fr 1fr 1fr',
                            gridAutoFlow: 'dense',
                            overflowY: 'auto',
                            flexGrow: 1,
                            maxHeight: '882px',
                        }}
                    >
                        <OverViewCard
                            title={dictionary.boards}
                            rowSpan={'1 / 4'}
                        >
                            {isLoadingDashboard ? (
                                <RepeatComponent
                                    times={3}
                                    render={(idx) => (
                                        <BoardCard
                                            boardInfo={undefined}
                                            isLoadingBoard={isLoadingDashboard}
                                            key={idx}
                                            idx={idx}
                                        />
                                    )}
                                />
                            ) : (
                                dashboardRes?.data?.map((boardInfo, idx) => (
                                    <BoardCard
                                        boardInfo={boardInfo}
                                        key={idx + boardInfo?.id}
                                    />
                                ))
                            )}
                        </OverViewCard>
                        <EventCardProvider>
                            <OverViewCard
                                title={'Events'}
                                rowSpan={'1 / 2'}
                                backgroundColor={(theme: Theme) =>
                                    theme.palette.background?.paper
                                }
                                borderColor={(theme: Theme) =>
                                    theme.palette.grey[700]
                                }
                                header={
                                    <EventCardHeader
                                        totalCount={dashboardRes?.count}
                                    />
                                }
                            >
                                <EventCard
                                    boardInfo={dashboardRes?.data}
                                    isLoadingBoard={isLoadingDashboard}
                                />
                            </OverViewCard>
                        </EventCardProvider>

                        <OverViewCard
                            title={dictionary.boards + 2}
                            rowSpan={'1 / 3'}
                        >
                            <BoardCard
                                boardInfo={undefined}
                                isLoadingBoard={true}
                            />
                        </OverViewCard>

                        <Stack sx={{ gridRow: '2 / 4' }}>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                Ads
                                <Typography color={'text.disabled'}>
                                    powered by
                                    <Typography color={'text.secondary'}>
                                        {' '}
                                        Datsyar.io©
                                    </Typography>
                                </Typography>
                            </Typography>
                            <OverViewCard
                                backgroundColor={(theme: Theme) =>
                                    `linear-gradient(135deg, ${theme.palette.grey[800]} -25%, ${theme.palette.grey[900]} 25%, ${theme.palette.grey[900]} 50%, ${theme.palette.grey[900]} 75%, ${theme.palette.primary.dark} 150%)`
                                }
                                borderColor={(theme: Theme) =>
                                    `linear-gradient(135deg, ${theme.palette.grey[600]},70%, ${theme.palette.primary.light})`
                                }
                            >
                                <AdsCard />
                            </OverViewCard>
                        </Stack>
                        <OverViewCard
                            rowSpan={'3 / 4'}
                            backgroundColor={(theme: Theme) =>
                                theme.palette.secondary?.dark + '10'
                            }
                            borderColor={(theme: Theme) =>
                                theme.palette.grey[900]
                            }
                        >
                            <TimeCard />
                        </OverViewCard>
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
