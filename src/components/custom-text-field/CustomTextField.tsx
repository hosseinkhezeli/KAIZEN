//@3rd Party
import { FC } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import {
    InputLabel,
    TextField,
    BaseTextFieldProps,
    InputLabelProps,
    FormControlProps,
} from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
interface ITextInput extends BaseTextFieldProps {
    label: string; // Ensure label is a required prop
    labelProps?: InputLabelProps;
    formControlProps?: FormControlProps;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TextInput: FC<ITextInput> = ({
    label,
    labelProps,
    formControlProps,
    ...textFieldProps
}) => {
    const inputId = `${label}-input`;
    return (
        <InputLabel
            htmlFor={inputId}
            {...labelProps}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 'max-content',
                my: '4px',
                ...labelProps?.sx,
            }}
        >
            {label}
            <TextField id={inputId} {...textFieldProps} />
        </InputLabel>
    );
};

export default TextInput;
