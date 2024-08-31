import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Route } from 'next';
import { useParams } from 'next/navigation';
import { Locale } from '@/i18n';

const Href = ({
    to,
    children,
}: {
    to: Route | 'string';
    children: ReactNode;
}) => {
    const { lang } = useParams<{ lang: Locale }>();
    return <Link href={lang + '/' + to}>{children}</Link>;
};

export default Href;
