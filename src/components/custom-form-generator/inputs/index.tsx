import TextInput from '@components/custom-form-generator/inputs/components/TextInput';
import SelectInput from '@components/custom-form-generator/inputs/components/SelectInput';
import RadioInput from '@components/custom-form-generator/inputs/components/RadioInput';
import CheckboxInput from '@components/custom-form-generator/inputs/components/CheckboxInput';
import OtpInput from '@components/custom-form-generator/inputs/components/OtpInput';

const FormFieldMapping = {
    text: TextInput,
    email: TextInput,
    password: TextInput,
    currency: TextInput,
    number: TextInput,
    phone: TextInput,
    select: SelectInput,
    radio: RadioInput,
    checkbox: CheckboxInput,
    otp: OtpInput,
};

export default FormFieldMapping;
