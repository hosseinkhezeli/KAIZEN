import { Typography } from '@mui/material';
import { handleTextValue } from '../../../../../dayar/dayar-kindergarten-admin/src/helpers/methods/methods';
import { ReactNode } from 'react';

const KVField = ({
    fieldLabel,
    fieldValue,
    highlight,
    withColon = true,
}: {
    fieldLabel?: string | ReactNode | undefined;
    fieldValue?: string | ReactNode | undefined;
    highlight?: boolean;
    withColon?: boolean;
}) => {
    return (
        <Typography
            component={typeof fieldLabel === 'string' ? 'p' : 'div'}
            variant={'caption3'}
            color={'text.12'}
            display={'flex'}
        >
            {fieldLabel}
            {withColon && ' : '}
            <Typography
                component={typeof fieldValue === 'string' ? 'span' : 'div'}
                variant={highlight ? 'caption2' : 'caption3'}
                {...(highlight && {
                    color: 'secondary.main',
                })}
                mx={'4px'}
            >
                {typeof fieldValue === 'string'
                    ? handleTextValue(fieldValue)
                    : fieldValue}
            </Typography>
        </Typography>
    );
};

export default KVField;
