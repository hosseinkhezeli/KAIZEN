//@3rd Party
import { FC, ReactNode } from 'react';
import { FormProvider, UseFormReturn, FieldValues } from 'react-hook-form';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Components
import FormFieldMapping from '@components/custom-form-generator/inputs';
import Box from '@mui/material/Box';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { InputProps } from '@components/custom-form-generator/inputs/components/type';
interface DynamicFormProps {
    formConfig: InputProps[];
    onSubmit: (data: any) => void;
    children: ReactNode;
    form: UseFormReturn<FieldValues, any, undefined>;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const CustomForm: FC<DynamicFormProps> = ({
    formConfig,
    onSubmit,
    children,
    form: methods,
}) => {
    // const methods = useForm();
    return (
        <FormProvider {...methods}>
            <Box
                component={'form'}
                onSubmit={methods.handleSubmit(onSubmit)}
                noValidate
                sx={{ width: '100%', height: 'max-content', p: '1rem' }}
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
