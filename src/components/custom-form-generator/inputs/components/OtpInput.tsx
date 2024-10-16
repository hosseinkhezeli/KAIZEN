//@3rd Party
import { FC, useState, KeyboardEvent, useEffect } from 'react';
//______________________________________________________________

//@Mui
import { Grid2 as Grid, InputLabel, TextField } from '@mui/material';
//______________________________________________________________

//@Components
import { TextFieldProps } from '@components/custom-form-generator/inputs/components/type';
import { useFormContext } from 'react-hook-form';
//______________________________________________________________

const OtpInput: FC<TextFieldProps> = ({
    name,
    label,
    type = 'otp',
    validation,
}) => {
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
    const {
        setValue,
        formState: { errors },
        getValues,
    } = useFormContext();
    useEffect(() => {
        setOtp(getValues(name)?.split(''));
    }, [getValues(name)]);
    const handleChange = (index: number, value: string) => {
        const newOtp = [...otp];
        newOtp[index] = value;

        if (value && index < 5) {
            const nextInput = document.querySelector(
                `input[name="otp[${index + 1}]"]`,
            ) as HTMLInputElement;
            if (nextInput) nextInput.focus();
        }
        setOtp(newOtp);
        setValue(name, newOtp.join(''));
    };

    const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
        // Move focus to the previous input if backspace is pressed
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.querySelector(
                `input[name="otp[${index - 1}]"]`,
            ) as HTMLInputElement;
            if (prevInput) prevInput.focus();
        }
    };

    return (
        <Grid container spacing={1}>
            <InputLabel
                htmlFor={'otp-input'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'max-content',
                    width: '100%',
                    transform: 'none',
                    fontWeight: 600,
                }}
            >
                {label}
            </InputLabel>
            {otp.map((digit, index) => (
                <Grid key={index} size={2} minHeight={57.6}>
                    <TextField
                        value={digit}
                        id={'otp-input'}
                        slotProps={{
                            htmlInput: {
                                maxLength: 1,
                                name: `otp[${index}]`,
                            },
                        }}
                        variant='outlined'
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyUp={(e) => handleKeyUp(e, index)}
                        sx={{
                            '.MuiOutlinedInput-input ': {
                                height: '42px',
                                p: '0 15px',
                            },
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default OtpInput;
