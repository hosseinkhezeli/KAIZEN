'use client';
//@Mui
import { Button, Container, Stack, Typography } from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//@Components & Hooks
import CustomForm from '@components/custom-form-generator/CustomForm';
import useSignInForm from '@/app/[lang]/(authentication)/sign-in/hooks/useSignInForm';
import { cominIn, cominUp } from '@styles/animationKeyframes';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//@Types
import { TAuth } from '@i18n/dictionary/types/auth';
import Marquee from '@components/custom-marquee/CustomMarquee';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SignInForm = ({ dictionary }: { dictionary: TAuth }) => {
    // Destructure the custom hook for handling sign-in logic
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
        <Stack
            sx={{
                backgroundColor: 'background.paper',
                p: { xs: '1rem 15%', sm: '0 10%' },
                flexBasis: '100%',
                maxWidth: { xs: '100%', sm: '50%' },
                transform: { xs: 'translateY(100%)', sm: 'translateX(100%)' },
                opacity: 0,
                zIndex: 2,
                animation: {
                    xs: `${cominUp} 0.5s ease 1s forwards`,
                    sm: `${cominIn} 0.5s ease 1s forwards`,
                },
                borderRadius: {
                    xs: '24px 24px 0 0 ',
                    sm: '0px 24px 24px 0px',
                },
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography
                variant='h6'
                sx={{
                    textWrap: 'nowrap',
                    // opacity: '0',
                    // animation: `${pop} 0.5s ease 1s forwards`,
                }}
            >
                {`${dictionary.welcome_back}, ${dictionary.mate}!`}
            </Typography>
            <Stack
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    mx: 'auto',
                }}
            >
                <CustomForm
                    form={step === 0 ? otpForm : signInForm}
                    onSubmit={step === 0 ? onSubmitOtp : onSubmitSignIn}
                    formConfig={step === 0 ? inputListOtp : inputListSignIn}
                >
                    <Stack gap={1}>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            fullWidth
                        >
                            {step === 0
                                ? dictionary.send_code
                                : dictionary.sign_in}
                        </Button>
                    </Stack>
                </CustomForm>
            </Stack>
        </Stack>
    );
};

export default SignInForm;
