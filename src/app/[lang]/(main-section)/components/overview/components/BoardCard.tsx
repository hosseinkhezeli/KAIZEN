import { useState } from 'react';
import { Skeleton, Stack, Tooltip, Typography } from '@mui/material';
import { rndPatternGenerator, truncateString } from '@utils/methods';
import { DocumentIcon } from '@heroicons/react/24/outline';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Locale } from '@/i18n';

const BoardCard = ({ boardInfo }: { boardInfo?: IGetDashboardData }) => {
    const [loading, setLoading] = useState(true);
    const handleLoadingComplete = () => {
        setLoading(false);
    };
    const { push: navigateTo } = useRouter();
    const { lang } = useParams<{ lang: Locale }>();
    return (
        <Stack
            onClick={() => navigateTo(`${lang}/boards/${boardInfo?.id}`)}
            sx={{
                p: '4px 8px',
                border: '1px solid',
                borderColor: 'grey.200',
                borderRadius: 3,
                flexBasis: { xs: '100%', sm: '50%', md: '33%' },
                position: 'relative',
                transition: '0.3s ease border-color',
                gap: 1,
                ':hover': {
                    borderColor: 'primary.main',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <DocumentIcon width={16} height={16} />
                <Typography variant={'subtitle2'} flexGrow={1}>
                    {boardInfo?.title}
                </Typography>
            </Box>
            <Tooltip title={boardInfo?.description} sx={{ zIndex: 4 }}>
                <Typography variant={'caption'} fontSize={11}>
                    {truncateString(boardInfo?.description || ' ', 50)}
                </Typography>
            </Tooltip>
            <Box display={'flex'} flexWrap={'wrap'} gap={1}>
                {boardInfo?.labels?.map((label, idx) => (
                    <Typography
                        key={idx}
                        variant={'caption'}
                        fontSize={'10px'}
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
            {boardInfo?.background && (
                <Box
                    sx={{
                        filter: 'grayscale(1)',
                        zIndex: 2,
                        height: '100%',
                        transition: '0.3s ease all',
                        ':hover': {
                            filter: 'none',
                        },
                    }}
                >
                    {loading && (
                        <Skeleton
                            variant='rectangular'
                            width={'100%'}
                            height={'100%'}
                            sx={{ aspectRatio: '2/1', borderRadius: '8px' }}
                        />
                    )}
                    <Image
                        src={boardInfo?.background}
                        alt={boardInfo.title}
                        width={200}
                        height={200}
                        fetchPriority={'low'}
                        onLoadingComplete={() =>
                            setTimeout(() => handleLoadingComplete(), 1000)
                        }
                        style={{
                            width: loading ? '0' : '100%',
                            height: loading ? '0' : '100%',
                            aspectRatio: '2/1',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            filter: 'inherit',
                            transition: '0.3s ease all',
                            objectPosition: 'top',
                            zIndex: 1,
                            visibility: loading ? 'hidden' : 'visible',
                        }}
                    />
                </Box>
            )}

            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: '0',
                    left: '0',
                    borderRadius: 3,
                    backgroundColor: 'transparent',
                    opacity: '15%',
                    backgroundImage: (theme) => rndPatternGenerator(theme),
                    backgroundBlendMode: 'multiply',
                    zIndex: 1,
                }}
            />
        </Stack>
    );
};

export default BoardCard;
