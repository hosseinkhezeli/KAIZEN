//@Components & Methods
import SignInForm from '@/app/[lang]/(authentication)/sign-in/components/SignInForm';
import { getDictionaryServer, Locale } from '@/i18n';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SignIn = ({
    params,
}: {
    params: {
        lang: Locale;
    };
}) => {
    const dictionary = getDictionaryServer(params.lang);
    return <SignInForm dictionary={dictionary.auth} />;
};

export default SignIn;
