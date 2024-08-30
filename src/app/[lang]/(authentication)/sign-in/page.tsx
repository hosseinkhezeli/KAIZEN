import SignInForm from '@/app/[lang]/(authentication)/sign-in/components/SignInForm';
import { getDictionary, i18n, Locale } from '@/i18n';
//@Server Functions
export async function generateStaticParams() {
    return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}
const SignIn = async ({
    params,
}: {
    params: {
        lang: Locale;
    };
}) => {
    console.log(params);
    const dictionary = await getDictionary(params.lang);
    return <SignInForm dictionary={dictionary.auth} />;
};

export default SignIn;
