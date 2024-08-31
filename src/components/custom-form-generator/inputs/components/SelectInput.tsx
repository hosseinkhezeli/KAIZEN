//@3rd Party
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
} from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { SelectProps } from '@components/custom-form-generator/inputs/components/type';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SelectInput: FC<SelectProps> = ({ name, label, options, validation }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <FormControl
            variant='outlined'
            fullWidth
            margin='normal'
            error={!!errors[name]}
        >
            <InputLabel>{label}</InputLabel>
            <Select {...register(name, validation)} label={label}>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            {errors[name] && (
                <FormHelperText>
                    <>{errors[name]?.message}</>
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default SelectInput;
