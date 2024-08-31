//@Components & Methods
import { getDictionary, i18n, Locale } from '@/i18n';
import SignUpForm from '@/app/[lang]/(authentication)/sign-up/components/SignUpForm';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Server Functions
export async function generateStaticParams() {
    return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SignUp = async ({
                          params,
                      }: {
    params: {
        lang: Locale;
    };
})=>{
    const dictionary = await getDictionary(params.lang);
    return (
            <SignUpForm dictionary={dictionary.auth}/>
    );
};

export default SignUp;
