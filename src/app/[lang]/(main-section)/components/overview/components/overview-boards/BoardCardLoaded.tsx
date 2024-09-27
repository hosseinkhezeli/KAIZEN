import { Box, Typography, Tooltip, Stack } from '@mui/material';
import { DocumentIcon } from '@heroicons/react/24/outline';
import { truncateString } from '@utils/methods';
import Image from 'next/image';
import { Property } from 'csstype';
import Href from '@components/custom-link/CustomLink';

interface BoardCardLoadedProps {
    boardInfo: IGetDashboardData | undefined;
}

export function BoardCardLoaded({ boardInfo }: BoardCardLoadedProps) {
    return (
        <Href to={`/boards/${boardInfo?.id}`}>
            <Stack sx={styles.card}>
                <Box sx={styles.header}>
                    <DocumentIcon width={16} height={16} />
                    <Typography variant='subtitle2'>
                        {boardInfo?.title}
                    </Typography>
                </Box>
                <Box sx={styles.description}>
                    <Tooltip title={boardInfo?.description || ''}>
                        <Typography variant='caption' sx={{ cursor: 'help' }}>
                            {truncateString(boardInfo?.description || '', 50)}
                        </Typography>
                    </Tooltip>
                </Box>
                <Box sx={styles.labels}>
                    {boardInfo?.labels?.map((label, idx) => (
                        <Typography
                            key={idx}
                            variant='caption'
                            sx={styles.label}
                        >
                            {label}
                        </Typography>
                    ))}
                </Box>
                <Box
                    className={'overview-boards-bg'}
                    sx={styles.imageContainer}
                >
                    <Image
                        src={boardInfo?.background || ' '}
                        alt='Board Background'
                        width={300}
                        height={90}
                        style={styles?.image}
                    />
                </Box>
            </Stack>
        </Href>
    );
}

const styles = {
    card: {
        p: '8px 12px',
        mr: '8px',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        borderRadius: 6,
        position: 'relative',
        cursor: 'pointer',
        transition: '0.3s ease border-color',
        gap: 1,
        height: '100%',
        maxHeight: '210px',
        ':hover': {
            borderColor: 'primary.main',
            '.board-card-bg': {
                filter: 'opacity(1) grayscale(0)',
                transform: 'scale(101%)',
            },
        },
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    },
    description: {
        display: 'flex',
    },
    labels: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
    },
    label: {
        backgroundColor: 'grey.800',
        p: '2px 6px',
        borderRadius: '24px',
        fontSize: 11,
    },
    imageContainer: {
        borderColor: 'grey.700',
        filter: 'opacity(0.4) grayscale(1)',
        transition: '0.2s ease all',
    },
    image: {
        width: '100%',
        objectFit: 'cover' as Property.ObjectFit,
        borderRadius: '24px',
        border: '1px solid',
        borderColor: 'inherit',
    },
};
