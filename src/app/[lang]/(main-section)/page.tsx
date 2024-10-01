import Overview from '@/app/[lang]/(main-section)/components/overview';
import { getDictionaryServer, type Locale } from '@/i18n';

export default function Home({ params }: { params: { lang: Locale } }) {
    const dictionary = getDictionaryServer(params.lang);
    return (
        <>
            <Overview dictionary={dictionary.dashboard} />
        </>
    );
}
