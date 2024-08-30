//@3rd Party
import { useFormContext } from 'react-hook-form';
import { FC } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import {
    FormControlLabel,
    Checkbox,
    FormHelperText,
    FormControl,
} from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { CheckboxProps } from '@components/custom-form-generator/inputs/components/type';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
