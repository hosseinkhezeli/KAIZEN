//@3rd Party
import { ReactNode } from 'react';
import { FormProvider, UseFormReturn, FieldValues } from 'react-hook-form';
//______________________________________________________________

//@Components
import FormFieldMapping from '@components/custom-form-generator/inputs';
import Box, { BoxProps } from '@mui/material/Box';
import { pop } from '@styles/animationKeyframes';
//______________________________________________________________

//@Types
import { InputProps } from '@components/custom-form-generator/inputs/components/type';
import { styled } from '@mui/material';
interface DynamicFormProps<T extends FieldValues> {
    formConfig: InputProps[];
    onSubmit: (data: any) => void;
    children?: ReactNode; // Made optional for flexibility
    form: UseFormReturn<T | any, any, undefined>;
}
interface FormProps extends BoxProps<'form'> {
    component?: React.ElementType;
}
//______________________________________________________________

const CustomForm = <T extends FieldValues>({
    formConfig,
    onSubmit,
    children,
    form: methods,
}: DynamicFormProps<T>) => {
    return (
        <FormProvider {...methods}>
            <Form
                component={'form'}
                onSubmit={methods.handleSubmit(onSubmit)}
                noValidate
            >
                {formConfig.map((fieldConfig, idx) => {
                    const FieldComponent =
                        FormFieldMapping[fieldConfig?.type || 'text'];
                    return FieldComponent ? (
                        // @ts-ignore
                        <FieldComponent {...fieldConfig} key={idx} />
                    ) : null;
                })}

                {children}
            </Form>
        </FormProvider>
    );
};

export default CustomForm;

const Form = styled(Box)<FormProps>(({ theme }) => ({
    width: '100%',
    height: 'max-content',
    padding: '1rem',
    opacity: 0,
    animation: `${pop} 0.5s ease 0.5s forwards`,
}));
