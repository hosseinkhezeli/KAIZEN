//@3rd Party
import { FC, ReactNode } from 'react';
// ________________________________________________________________________

//@Mui
import { ButtonOwnProps, IconButton, Typography } from '@mui/material';
// ________________________________________________________________________

//@Assets
import SvgCalendarEdit from 'ideep-design-system-2/icons/CalendarEdit';
// ________________________________________________________________________

//@Types
interface ICalendarButton {
    id?: string;
    handleClick: (e?: any) => void;
    caption: string | number | ReactNode;
    withIcon?: boolean;
    color?: ButtonOwnProps['color'];
}

// ________________________________________________________________________

const CalendarButton: FC<ICalendarButton> = ({
    id,
    handleClick,
    caption,
    withIcon = false,
    color,
}) => {
    return (
        <>
            <IconButton
                sx={{
                    fontFamily: 'inherit',
                    minWidth: 'min-content',
                    backgroundColor: 'background.4',
                    ':hover': {
                        backgroundColor: `${color ?? 'background'}.2`,
                    },
                    stroke: (theme) => theme.palette.text.primary,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    p: '4px 8px',
                    borderRadius: '8px',
                }}
                aria-describedby={id}
                onClick={handleClick}
            >
                {withIcon && (
                    <SvgCalendarEdit
                        width={24}
                        height={24}
                        primarycolor={'inherit'}
                    />
                )}
                <Typography
                    component={
                        caption instanceof String || caption instanceof Number
                            ? 'div'
                            : 'p'
                    }
                    variant={'caption3'}
                    display={'flex'}
                    alignItems={'center'}
                >
                    {caption}
                </Typography>
            </IconButton>
        </>
    );
};

export default CalendarButton;
