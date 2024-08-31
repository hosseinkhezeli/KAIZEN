//@3rd Party
import { ChangeEvent, FC } from 'react';
import { useFormContext } from 'react-hook-form';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Components
import CustomTextInput from '@components/custom-text-field/CustomTextField';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { TextFieldProps } from '@components/custom-form-generator/inputs/components/type';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TextInput: FC<TextFieldProps> = ({
    name,
    label,
    type = 'text',
    validation,
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const formatNumber = (value: string) => {
        return value.replace(/[^0-9+\-.()\/* ]/g, '');
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        if (type === 'currency' || type === 'number' || type === 'phone') {
            value = formatNumber(value);
        }

        event.target.value = value;
    };

    return (
        <CustomTextInput
            {...register(name, validation)}
            label={label}
            type={type === 'currency' ? 'text' : type}
            variant='outlined'
            fullWidth
            error={!!errors[name]}
            helperText={<>{errors[name]?.message}</>}
            onChange={(e) => handleChange(e)}
            InputProps={{
                startAdornment: type === 'currency' ? <span>$</span> : null,
            }}
        />
    );
};

export default TextInput;
