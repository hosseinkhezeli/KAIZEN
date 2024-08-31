//@3rd Party
import { ReactNode } from 'react';
import { FormProvider, UseFormReturn, FieldValues } from 'react-hook-form';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Components
import FormFieldMapping from '@components/custom-form-generator/inputs';
import Box from '@mui/material/Box';
import { pop } from '@utils/animationKeyframes';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { InputProps } from '@components/custom-form-generator/inputs/components/type';
interface DynamicFormProps<T extends FieldValues> {
    formConfig: InputProps[];
    onSubmit: (data: any) => void;
    children?: ReactNode; // Made optional for flexibility
    form: UseFormReturn<T | any, any, undefined>;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const CustomForm = <T extends FieldValues>({
    formConfig,
    onSubmit,
    children,
    form: methods,
}: DynamicFormProps<T>) => {
    return (
        <FormProvider {...methods}>
            <Box
                component={'form'}
                onSubmit={methods.handleSubmit(onSubmit)}
                noValidate
                sx={{
                    width: '100%',
                    height: 'max-content',
                    p: '1rem',
                    opacity: 0,
                    animation: `${pop} 0.5s ease 0.5s forwards`,
                }}
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
            </Box>
        </FormProvider>
    );
};

export default CustomForm;
