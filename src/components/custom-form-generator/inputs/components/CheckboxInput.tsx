//@3rd Party
import { useFormContext } from 'react-hook-form';
import { FC } from 'react';
//______________________________________________________________

//@Mui
import {
    FormControlLabel,
    Checkbox,
    FormHelperText,
    FormControl,
} from '@mui/material';
//______________________________________________________________

//@Types
import { CheckboxProps } from '@components/custom-form-generator/inputs/components/type';
//______________________________________________________________

const CheckboxInput: FC<CheckboxProps> = ({ name, label, validation }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <FormControl error={!!errors[name]}>
            <FormControlLabel
                control={<Checkbox {...register(name, validation)} />}
                label={label}
            />
            {errors[name] && (
                <FormHelperText>
                    <>{errors[name]?.message}</>
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default CheckboxInput;
