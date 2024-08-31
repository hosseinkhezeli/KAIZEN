//@3rd Party
import { useForm } from 'react-hook-form';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Hooks & Components
import { useGetOtpCode } from '@/services/api/auth/hooks';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { InputProps } from '@components/custom-form-generator/inputs/components/type';
import { TAuth } from '@i18n/dictionary/types/auth';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const useSignInForm = ({ dictionary }: { dictionary: TAuth }) => {
  const signInForm = useForm();
  const { mutate: getOtpCode } = useGetOtpCode();

  const inputList: InputProps[] = [
    {
      name: 'phoneNumber',
      type: 'phone',
      label: dictionary.phone_number,
      placeholder: '+98...',
      validation: { required: 'Phone number is required' },
    },
  ];
  const onSubmit = (data: any) => {
    getOtpCode(
      { phoneNumber: data.phoneNumber },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };
  return { onSubmit, signInForm, inputList };
};

export default useSignInForm;
