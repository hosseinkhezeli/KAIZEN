import { useState, FC } from 'react';
import { Skeleton, Stack, Tooltip, Typography, Box } from '@mui/material';
import { truncateString } from '@utils/methods';
import { DocumentIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Locale } from '@/i18n';

interface BoardCardProps {
    boardInfo?: IGetDashboardData;
    isLoadingBoard?: boolean;
}

const BoardCard: FC<BoardCardProps> = ({ boardInfo, isLoadingBoard }) => {
    const [loading, setLoading] = useState(true);
    const { push: navigateTo } = useRouter();
    const { lang } = useParams<{ lang: Locale }>();

    const handleLoadingComplete = () => setLoading(false);
    const handleClick = () =>
        boardInfo && navigateTo(`${lang}/boards/${boardInfo.id}`);

    return (
        <Stack
            onClick={handleClick}
            sx={{
                p: '8px 12px',
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'grey.800',
                borderRadius: 3,
                flexBasis: { xs: '100%', sm: '50%', md: '33%' },
                position: 'relative',
                transition: '0.3s ease border-color',
                gap: 1,
                height: '100%',
                ':hover': {
                    borderColor: 'primary.main',
                },
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DocumentIcon width={16} height={16} />
                {isLoadingBoard ? (
                    <Skeleton variant='text' sx={{ flexGrow: 1 }} />
                ) : (
                    <Typography variant='subtitle2'>
                        {boardInfo?.title}
                    </Typography>
                )}
            </Box>
            <Tooltip title={boardInfo?.description || ''}>
                {isLoadingBoard ? (
                    <Skeleton variant='text' sx={{ flexGrow: 1 }} />
                ) : (
                    <Typography variant='caption'>
                        {truncateString(boardInfo?.description || '', 50)}
                    </Typography>
                )}
            </Tooltip>
            <Box display='flex' flexWrap='wrap' gap={1}>
                {boardInfo?.labels?.map((label, idx) => (
                    <Typography
                        key={idx}
                        variant='caption'
                        sx={{
                            backgroundColor: 'background.default',
                            p: '2px 4px',
                            borderRadius: '4px',
                        }}
                    >
                        {label}
                    </Typography>
                ))}
            </Box>
            <Box
                sx={{
                    filter: 'grayscale(1)',
                    zIndex: 2,
                    height: '100%',
                    flexGrow: 2,
                    transition: '0.3s ease all',
                    ':hover': { filter: 'none' },
                }}
            >
                {loading && (
                    <Skeleton
                        variant='rectangular'
                        sx={{
                            borderRadius: '8px',
                            maxHeight: 180,
                            height: '100%',
                        }}
                    />
                )}
                {boardInfo?.background && (
                    <Image
                        src={boardInfo.background}
                        alt='Board Background'
                        width={200}
                        height={100}
                        fetchPriority='low'
                        onLoadingComplete={handleLoadingComplete}
                        style={
                            loading
                                ? { width: '0%', height: '0%' }
                                : {
                                      width: '100%',
                                      height: '100%',
                                      objectFit: 'cover',
                                      borderRadius: '8px',
                                      transition: '0.3s ease all',
                                  }
                        }
                    />
                )}
            </Box>
        </Stack>
    );
};

export default BoardCard;
