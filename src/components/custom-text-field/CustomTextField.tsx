import React, { FC } from 'react';
import {
    FormControl,
    InputLabel,
    TextField,
    BaseTextFieldProps,
    Stack,
} from '@mui/material';
import { InputLabelProps } from '@mui/material';
import { FormControlProps } from '@mui/material';

interface ITextInput extends BaseTextFieldProps {
    labelProps?: InputLabelProps;
    formControlProps?: FormControlProps;
}

const TextInput: FC<ITextInput> = ({
    labelProps,
    formControlProps,
    label,
    ...textFieldProps
}) => {
    return (
        <InputLabel
            htmlFor={label + '-input'}
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
            <TextField id={label + '-input'} {...textFieldProps} />
        </InputLabel>
    );
};

export default TextInput;
