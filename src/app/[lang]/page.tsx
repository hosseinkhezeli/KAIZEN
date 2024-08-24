import { Button } from '@mui/material';
import TextInput from '@components/custom-text-field/CustomTextField';

export default function Home() {
    return (
        <main>
            <TextInput variant={'outlined'} label={'This is a label'} />
            <TextInput variant={'outlined'} label={'این یک لیبل است'} />
            <Button>سلام بر دنیا</Button>
            <Button>Hello World</Button>
        </main>
    );
}
