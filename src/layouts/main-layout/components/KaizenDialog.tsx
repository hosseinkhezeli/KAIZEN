import CustomForm from '@/components/custom-form-generator/CustomForm';
import { InputProps } from '@/components/custom-form-generator/inputs/components/type';
import { useCreateBoard } from '@/services/api/board/hooks';
import useUserStore from '@/states/user/userSlice';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    IconButton,
    DialogTitle,
    Snackbar,
    Box,
    Typography,
    Alert,
} from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

export function KaizenDialog() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const action = searchParams.get('action');
    const { mutate: createBoard, isSuccess } = useCreateBoard();
    const resetParam = () => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.delete('action');
        return `${newSearchParams.toString()}`;
    };
    const { user } = useUserStore();
    const router = useRouter();
    const { push } = router;
    const form = useForm<{ title: string; description: string }>();
    const inputConfig: InputProps[] = [
        {
            type: 'text',
            name: 'title',
            label: 'Title',
            validation: {
                required: 'Title is required',
            },
        },
        {
            type: 'text',
            name: 'description',
            label: 'Description',
        },
    ];

    const onSubmit = (data: { title: string; description: string }) => {
        createBoard(
            { ...data, userId: user?.userId },
            {
                onSuccess: () => {
                    form.reset();
                    push(`${pathname}?${resetParam()}`);
                },
            },
        );
    };
    return (
        <>
            <Dialog
                open={action === 'create-board'}
                onClose={() => push(`${pathname}?${resetParam()}`)}
            >
                <DialogTitle
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    Create new board
                    <IconButton
                        onClick={() => push(`${pathname}?${resetParam()}`)}
                    >
                        <XMarkIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography variant='body1'>
                        Create a new board as fast as it possible!
                        <br />
                        <Typography>
                            You can add other information along the way.
                        </Typography>
                    </Typography>
                    <Box
                        component={'form'}
                        onSubmit={form.handleSubmit(onSubmit)}
                        id='create-board-form'
                    >
                        <CustomForm
                            form={form}
                            formConfig={inputConfig}
                            onSubmit={form.handleSubmit(onSubmit)}
                        />
                    </Box>
                </DialogContent>
                {/* <DialogContentText>Dialog Content Text</DialogContentText> */}
                <DialogActions>
                    <Button
                        form='create-board-form'
                        type='submit'
                        color='success'
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={isSuccess}
                autoHideDuration={5000}
                message='This Snackbar will be dismissed in 5 seconds.'
                color='success'
                sx={{
                    '.MuiSnackbarContent': {
                        backgroundColor: 'success.light',
                    },
                }}
            >
                <Alert
                    severity='success'
                    variant='filled'
                    sx={{ width: '100%' }}
                >
                    Board successfully has been created
                </Alert>
            </Snackbar>
        </>
    );
}
