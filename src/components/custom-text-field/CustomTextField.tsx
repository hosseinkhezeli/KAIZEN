//@3rd Party
import React, { ChangeEvent, forwardRef } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import {
    InputLabel,
    TextField,
    InputLabelProps,
    FormControlProps,
    TextFieldProps,
} from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
interface ITextInput extends TextFieldProps<'outlined'> {
    label: string;
    labelProps?: InputLabelProps;
    formControlProps?: FormControlProps;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TextInput = forwardRef<HTMLInputElement, ITextInput>(
    (
        { label, labelProps, formControlProps, onChange, ...textFieldProps },
        ref,
    ) => {
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
                    width: '100%',
                    transform: 'none',
                    fontWeight: 600,
                    ...labelProps?.sx,
                }}
            >
                {label}
                <TextField
                    id={inputId}
                    inputRef={ref}
                    {...textFieldProps}
                    onChange={onChange}
                />
            </InputLabel>
        );
    },
);
TextInput.displayName = 'TextInput';
export default TextInput;
