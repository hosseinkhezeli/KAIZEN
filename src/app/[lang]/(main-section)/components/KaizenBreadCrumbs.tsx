import React, { useMemo } from 'react';
import CustomBreadCrumbs from '@components/custom-bread-crumbs/CustomBreadCrumbs';
import { HomeIcon } from '@heroicons/react/24/outline';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';

const KaizenBreadCrumbs = () => {
    const pathname = usePathname();
    const locations = useMemo(() => pathname?.split('/')?.slice(1), [pathname]);
    return (
        <CustomBreadCrumbs
            breadcrumbs={[
                ...[
                    {
                        href: '/',
                        label: (
                            <Box display={'flex'} alignItems={'center'} gap={1}>
                                <HomeIcon width={16} />
                                Home
                            </Box>
                        ),
                    },
                ],
                ...(locations.length
                    ? locations?.map((location) => ({
                          href: location,
                          label:
                              location?.[0]?.toUpperCase() + location?.slice(1),
                      }))
                    : []),
            ]}
        />
    );
};

export default KaizenBreadCrumbs;
