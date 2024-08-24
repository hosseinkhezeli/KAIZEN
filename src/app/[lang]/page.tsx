import { Breadcrumbs, Button, Typography } from '@mui/material';
import TextInput from '@components/custom-text-field/CustomTextField';
import IconButton from '@mui/material/IconButton';
import {
    ChevronRightIcon,
    FolderIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import CustomBreadCrumbs from '@components/custom-bread-crumbs/CustomBreadCrumbs';
import BG from '@components/BG';
import Box from '@mui/material/Box';

export default function Home() {
    const breadcrumbs = [
        <Link key='1' color='inherit' href='/'>
            <FolderIcon style={{ stroke: 'darkgray' }} width={20} height={20} />
            MUI
        </Link>,
        <Link
            key='2'
            color='inherit'
            href='/material-ui/getting-started/installation/'
        >
            Core
        </Link>,
        <Typography key='3' color='text.primary'>
            Breadcrumb
        </Typography>,
    ];
    return (
        <Box
            component={'main'}
            sx={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'background.default',
                background:
                    'repeating-linear-gradient( -45deg, #00000005, #00000005 2px, #ffffff05 2px, #ffffff05 5px )',
            }}
        >
            <TextInput variant={'outlined'} label={'This is a label'} />
            <TextInput variant={'outlined'} label={'این یک لیبل است'} />
            <IconButton>
                <MagnifyingGlassIcon
                    style={{ stroke: 'darkgray' }}
                    width={20}
                    height={20}
                />
            </IconButton>
            <Button>سلام بر دنیا</Button>
            <Button>Hello World</Button>
            <CustomBreadCrumbs
                breadcrumbs={[
                    { label: 'Project', href: '/' },
                    {
                        label: (
                            <>
                                <FolderIcon
                                    style={{ stroke: 'inherit' }}
                                    width={20}
                                    height={20}
                                />
                                Figma
                            </>
                        ),
                        href: '/home',
                    },
                ]}
            />
            <BG />
        </Box>
    );
}
