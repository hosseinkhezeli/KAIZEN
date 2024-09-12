//@Components & Methods
import SignInForm from '@/app/[lang]/(authentication)/sign-in/components/SignInForm';
import { getDictionaryServer, i18n, Locale } from '@/i18n';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Server Functions
export async function generateStaticParams() {
    return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SignIn = async ({
    params,
}: {
    params: {
        lang: Locale;
    };
}) => {
    const dictionary = await getDictionaryServer(params.lang);
    return <SignInForm dictionary={dictionary.auth} />;
};

export default SignIn;
