// components/CheckboxInput.tsx

import React from 'react';
import {
    FormControlLabel,
    Checkbox,
    FormHelperText,
    FormControl,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { CheckboxProps } from '@components/custom-form-generator/inputs/components/type';

const CheckboxInput: React.FC<CheckboxProps> = ({
    name,
    label,
    validation,
}) => {
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
