// Base interface for all form elements
interface BaseInputProps {
  name: string;
  label: string;
  validation?: Record<string, any>;
}
// Interface for TextField
export interface TextFieldProps extends BaseInputProps {
  type: 'text' | 'email' | 'password' | 'phone' | 'currency' | 'number' | 'otp';
  placeholder?: string;
}

// Interface for Checkbox
export interface CheckboxProps extends BaseInputProps {
  type: 'checkbox';
  checked: boolean;
}

// Interface for Radio
export interface RadioProps extends BaseInputProps {
  type?: 'radio';
  options: { value: string; label: string }[];
}

// Interface for Select
interface SelectProps extends BaseInputProps {
  type: 'select';
  options: { value: string; label: string }[];
}

// Union type for all input props
export type InputProps =
  | TextFieldProps
  | CheckboxProps
  | RadioProps
  | SelectProps;
