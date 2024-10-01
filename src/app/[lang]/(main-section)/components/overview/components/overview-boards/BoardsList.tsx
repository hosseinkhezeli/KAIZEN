import { RepeatComponent } from '@utils/methods';
import { BoardCard } from '@/app/[lang]/(main-section)/components/overview/components/overview-boards/BoardCard';
import CustomCard from '@components/custom-card/CustomCard';
import Box from '@mui/material/Box';
import { Divider, Stack, Typography } from '@mui/material';

type TOverviewBoards = {
    isLoading: boolean;
    boards: IGetDashboardData[] | undefined;
};

export function BoardsList({ isLoading, boards }: TOverviewBoards) {
    return (
        <CustomCard
            outerBoxProps={{
                sx: {
                    gridRow: '1 / 4',
                    height: '100%',
                },
            }}
            innerBoxProps={{
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    p: '16px 16px',
                    gap: 1.5,
                    height: '100%',
                },
            }}
        >
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
                    Boards
                </Typography>
            </Box>
            <Divider />

            <Stack gap={2} overflow={'auto'} height={'100%'}>
                {isLoading ? (
                    <RepeatComponent
                        times={3}
                        render={(idx) => (
                            <BoardCard
                                boardInfo={undefined}
                                isLoadingBoard={isLoading}
                                key={idx}
                                idx={idx}
                            />
                        )}
                    />
                ) : (
                    boards?.map((boardInfo, idx) => (
                        <BoardCard
                            boardInfo={boardInfo}
                            key={idx + boardInfo?.id}
                        />
                    ))
                )}
            </Stack>
        </CustomCard>
    );
}
