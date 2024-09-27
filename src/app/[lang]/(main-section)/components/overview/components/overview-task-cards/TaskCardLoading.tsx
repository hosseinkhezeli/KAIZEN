import { Box, Skeleton, Stack } from '@mui/material';
import { RectangleStackIcon } from '@heroicons/react/24/outline';

export function TaskCardLoading({ idx }: { idx: number }) {
    return (
        <Stack sx={styles.card(idx)}>
            <Box sx={styles.header}>
                <RectangleStackIcon width={22} />
                <Skeleton variant='text' sx={{ flexGrow: 1, minHeight: 0 }} />
            </Box>
            <Box sx={styles.description}>
                <Skeleton variant='text' sx={{ flexGrow: 1, minHeight: 0 }} />
            </Box>

            <Skeleton variant='rectangular' sx={styles.skeleton} />
        </Stack>
    );
}

const styles = {
    card: (idx: number) => ({
        p: '8px 12px',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        borderRadius: 6,
        gap: 1,
        height: '100%',
        maxHeight: '210px',
        cursor: 'pointer',
        filter: `opacity(${0.9 / (1 + idx)})`,
    }),
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        height: '22px',
    },
    description: {
        display: 'flex',
        height: '22px',
    },
    labels: {
        display: 'flex',
        gap: 1,
        height: '22px',
    },
    skeleton: {
        borderRadius: '24px',
        height: '100%',
        maxHeight: 180,
        flexBasis: '50%',
        flexGrow: 1,
    },
};
