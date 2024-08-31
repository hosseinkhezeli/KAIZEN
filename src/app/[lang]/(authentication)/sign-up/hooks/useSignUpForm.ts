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

const useSignUpForm = ({ dictionary }: { dictionary: TAuth }) => {
  const signUpForm = useForm();
  const { mutate: getOtpCode } = useGetOtpCode();

  const inputList: InputProps[] = [
    {
      name: 'fullName',
      type: 'text',
      label: dictionary.fullName,
    },
    {
      name: 'username',
      type: 'text',
      label: dictionary.userName,
      validation: { required: 'User name is required' },
    },
    {
      name: 'email',
      type: 'email',
      label: dictionary.email,
    },
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
  return { onSubmit, signUpForm, inputList };
};

export default useSignUpForm;
