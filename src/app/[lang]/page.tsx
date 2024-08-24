import { Button } from '@mui/material';
import TextInput from '@components/custom-text-field/CustomTextField';
import IconButton from '@mui/material/IconButton';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Home() {
    return (
        <main>
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
        </main>
    );
}
