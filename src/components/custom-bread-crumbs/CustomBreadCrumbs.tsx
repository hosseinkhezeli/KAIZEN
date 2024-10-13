'use client';

// @3rd Party
import { FC, memo, ReactNode, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Route } from 'next';
//______________________________________________________________

// @Mui
import { Breadcrumbs, BreadcrumbsProps, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//______________________________________________________________

// @Assets
import { ChevronRightIcon } from '@heroicons/react/20/solid';
//______________________________________________________________

//@Types
interface IBreadcrumb {
    label: string | ReactNode;
    href: Route | string;
}

interface ICustomBreadCrumbs extends BreadcrumbsProps {
    breadcrumbs: IBreadcrumb[] | undefined[];
}
//______________________________________________________________

const CustomBreadCrumbs: FC<ICustomBreadCrumbs> = memo(
    ({ breadcrumbs, sx, ...rest }) => {
        const { palette, typography } = useTheme();
        const currentPath = usePathname();
        const location = currentPath?.split('/').pop();

        const renderedBreadcrumbs = useMemo(() => {
            return breadcrumbs?.map((breadcrumb, idx) => {
                const isActive =
                    location === breadcrumb?.href ||
                    currentPath === breadcrumb?.href;
                const textColor = isActive
                    ? palette.text.primary
                    : palette.text.disabled;

                return (
                    <Link
                        key={`${breadcrumb?.href}-${idx}`}
                        href={breadcrumb?.href ?? '/'}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: textColor,
                            stroke: textColor,
                            ...typography.caption,
                        }}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        <Typography
                            component={
                                typeof breadcrumb?.label === 'string'
                                    ? 'p'
                                    : 'div'
                            }
                            sx={{
                                transition: '0.2s ease all',
                                ':hover': {
                                    color: 'text.primary',
                                    stroke: ({ palette }) =>
                                        palette.text.primary,
                                },
                                display: 'flex',
                                alignItems: 'center',
                                stroke: ({ palette }) => palette.text.disabled,
                                ...typography.caption,
                            }}
                        >
                            {breadcrumb?.label}
                        </Typography>
                    </Link>
                );
            });
        }, [breadcrumbs, location, currentPath, palette.text]);

        return (
            <Breadcrumbs
                maxItems={4}
                separator={
                    <ChevronRightIcon
                        style={{ fill: palette.text.disabled }}
                        width={16}
                        height={16}
                        strokeWidth={2}
                    />
                }
                aria-label='breadcrumb'
                {...rest}
                sx={[...[{ my: '1rem' }], ...(Array.isArray(sx) ? sx : [sx])]}
            >
                {renderedBreadcrumbs}
            </Breadcrumbs>
        );
    },
);

CustomBreadCrumbs.displayName = 'CustomBreadCrumbs';

export default CustomBreadCrumbs;
