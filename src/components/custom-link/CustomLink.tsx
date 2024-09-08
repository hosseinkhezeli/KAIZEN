//@3rd Party
import { ReactNode } from 'react';
import Link from 'next/link';
import { Route } from 'next';
import { useParams } from 'next/navigation';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
import { Locale } from '@/i18n';
import { useTheme } from '@mui/material/styles';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Href = ({
    to,
    children,
}: {
    to: Route | 'string';
    children: ReactNode;
}) => {
    const { lang } = useParams<{ lang: Locale }>();
    const { palette, typography } = useTheme();
    return (
        <Link
            href={'/' + lang + to}
            style={{
                textDecoration: 'none',
                color: palette.text.primary,
                ...typography.caption,
            }}
        >
            {children}
        </Link>
    );
};

export default Href;
