//@3rd Party
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormHelperText,
} from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { RadioProps } from '@components/custom-form-generator/inputs/components/type';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const RadioInput: FC<RadioProps> = ({ name, label, options, validation }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <FormControl component='fieldset' error={!!errors[name]}>
            <RadioGroup {...register(name, validation)}>
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
            {errors[name] && (
                <FormHelperText>
                    <>{errors[name]?.message}</>
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default RadioInput;
