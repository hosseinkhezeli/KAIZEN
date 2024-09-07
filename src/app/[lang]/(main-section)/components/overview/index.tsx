'use client';
//@Mui
import { Container, LinearProgress, Skeleton, Typography } from '@mui/material';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Component & Methods
import useOverview from '@/app/[lang]/(main-section)/hooks/useOverview';
import BoardCard from '@/app/[lang]/(main-section)/components/overview/components/BoardCard';
import OverviewBar from '@/app/[lang]/(main-section)/components/overview/components/OverviewBar';
import OverViewCard from '@/app/[lang]/(main-section)/components/overview/components/OverViewCard';
import { RepeatComponent } from '@utils/methods';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { TDashboard } from '@i18n/dictionary/types/dashboard';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Overview = ({ dictionary }: { dictionary: TDashboard }) => {
    const { isLoadingDashboard, dashboardRes, overviewInfo } = useOverview();
    return (
        <>
            <Container
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <Typography variant={'h4'} fontWeight={400}>
                    {dictionary.overview}
                </Typography>
                <OverviewBar overviewInfo={overviewInfo} />

                <OverViewCard title={dictionary.boards}>
                    {isLoadingDashboard ? (
                        <RepeatComponent
                            times={3}
                            render={(index) => (
                                <Skeleton
                                    key={index}
                                    variant='rectangular'
                                    width={'100%'}
                                    height={'100%'}
                                    sx={{
                                        p: '4px 8px',
                                        border: '1px solid',
                                        borderColor: 'grey.200',
                                        borderRadius: 3,
                                        flexBasis: {
                                            xs: '100%',
                                            sm: '50%',
                                            md: '33%',
                                        },
                                        minHeight: '20vw',
                                        position: 'relative',
                                        gap: 1,
                                    }}
                                />
                            )}
                        />
                    ) : (
                        dashboardRes?.data?.map((boardInfo, idx) => (
                            <BoardCard boardInfo={boardInfo} key={idx} />
                        ))
                    )}
                </OverViewCard>
            </Container>

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
