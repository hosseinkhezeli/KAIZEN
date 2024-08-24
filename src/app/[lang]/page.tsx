import { Button } from '@mui/material';
import TextInput from '@components/custom-text-field/CustomTextField';
import IconButton from '@mui/material/IconButton';
import { FolderIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import CustomBreadCrumbs from '@components/custom-bread-crumbs/CustomBreadCrumbs';

import Box from '@mui/material/Box';

export default function Home() {
    return (
        <Box component={'main'}>
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
        </Box>
    );
}
