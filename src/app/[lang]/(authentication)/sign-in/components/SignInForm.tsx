'use client';
//@Mui
import { Button, Stack, Typography } from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//@Components & Hooks
import CustomForm from '@components/custom-form-generator/CustomForm';
import useSignInForm from '@/app/[lang]/(authentication)/sign-in/hooks/useSignInForm';
import { cominIn, cominUp } from '@utils/animationKeyframes';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//@Types
import { TAuth } from '@i18n/dictionary/types/auth';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SignInForm = ({ dictionary }: { dictionary: TAuth }) => {
    const { onSubmit, signInForm, inputList } = useSignInForm({ dictionary });

    return (
        <Stack
            sx={{
                backgroundColor: 'background.default',
                p: { xs: '1rem 15%', sm: '0 10%' },
                flexBasis: '0%',
                maxWidth: { xs: '100%', sm: '50%' },
                animation: {
                    xs: `${cominUp} 0.5s ease forwards`,
                    sm: `${cominIn} 0.5s ease forwards`,
                },
                borderRadius: {
                    xs: '24px 24px 0 0',
                    sm: '0px 24px 24px 0px',
                },
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography variant={'h6'} sx={{ textWrap: 'nowrap' }}>
                {dictionary.welcome_back},{dictionary.mate}!
            </Typography>
            <CustomForm
                form={signInForm}
                onSubmit={onSubmit}
                formConfig={inputList}
            >
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    fullWidth
                >
                    {dictionary.sign_in}
                </Button>
            </CustomForm>
        </Stack>
    );
};

export default SignInForm;
