'use client';
//@Mui
import { Button, Stack, styled, Typography } from '@mui/material';
// ___________________________________________________________________
//@Components & Hooks
import CustomForm from '@components/custom-form-generator/CustomForm';
import useSignInForm from '@/app/[lang]/(authentication)/sign-in/hooks/useSignInForm';
import { cominIn, cominUp } from '@styles/animationKeyframes';
// ___________________________________________________________________
//@Types
import { TAuth } from '@i18n/dictionary/types/auth';
// ___________________________________________________________________

export function SignInForm({ dictionary }: { dictionary: TAuth }) {
    const {
        onSubmitOtp,
        otpForm,
        inputListOtp,
        onSubmitSignIn,
        signInForm,
        inputListSignIn,
        step,
    } = useSignInForm({ dictionary });

    return (
        <FormContainer>
            <FormTitle>
                {`${dictionary.welcome_back}, ${dictionary.mate}!`}
            </FormTitle>
            <FormWrapper>
                <CustomForm
                    form={step === 0 ? otpForm : signInForm}
                    onSubmit={step === 0 ? onSubmitOtp : onSubmitSignIn}
                    formConfig={step === 0 ? inputListOtp : inputListSignIn}
                >
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        fullWidth
                    >
                        {step === 0 ? dictionary.send_code : dictionary.sign_in}
                    </Button>
                </CustomForm>
            </FormWrapper>
        </FormContainer>
    );
}

export const FormContainer = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '1rem 15%',
    flexBasis: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    zIndex: 2,
    transform: 'translateY(100%)',
    maxWidth: '100%',
    animation: `${cominUp} 0.5s ease 1s forwards`,
    borderRadius: '24px 24px 0 0 ',
    [theme.breakpoints.up('sm')]: {
        padding: '0 10%',
        transform: 'translateX(100%)',
        maxWidth: '50%',
        animation: `${cominIn} 0.5s ease 1s forwards`,
        borderRadius: '0px 24px 24px 0px',
    },
}));

export const FormWrapper = styled(Stack)(() => ({
    width: '100%',
    maxWidth: 400,
    margin: '0 auto',
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
    textWrap: 'nowrap',
    ...theme.typography['h6'],
}));
