//@3rd Party
import { Calendar as DatePickerCalendar } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
// ____________________________________________________________________________________

//@Mui
import { Menu, MenuItem, Stack, Box, useTheme } from '@mui/material';
// ____________________________________________________________________________________

//@Hooks & Components
import CalendarButton from '~/components/custom-calendar/components/CalendarButton';
import useCustomCalendar from '~/components/custom-calendar/useCustomCalendar';
import MonthPicker from '~/components/custom-calendar/components/MonthPicker';
// ____________________________________________________________________________________

//@Styles
import './styles/style.css';
import { pop } from '../../../../../TurboTask/TurboTask/src/utils/animationKeyframes';
import { yearMonths } from '~/types/common';
import { FC } from 'react';
import SvgTick from 'ideep-design-system-2/icons/Tick';
import SvgClose from 'ideep-design-system-2/icons/Close';

// ____________________________________________________________________________________

export interface CalendarMonth {
    monthName: yearMonths;
    index: number;
    presentDays: number[];
    absentDays: number[];
}

export interface ICustomCalendar {
    trackingData: {
        year: number;
        months: CalendarMonth[];
    }[];
    yearOptions: number[];
    handleSubmit?: (e: any) => void;
    weekDays?: string[];
    minDate?: Date | string;
}

const CustomCalendar: FC<ICustomCalendar> = ({
    trackingData,
    yearOptions,
    handleSubmit,
    weekDays,
    minDate,
}) => {
    const theme = useTheme();

    const {
        selectorRef,
        setSelectedIndex,
        selectedIndex,
        months,
        calendarRef,
        date,
        updateMonth,
        updateDay,
        defaultWeekDays,
        id,
        open,
        handleClickOpenMenu,
        handleCloseMenu,
        anchorEl,
        mapDaysFn,
        updateYear,
    } = useCustomCalendar({ trackingData, yearOptions });

    return (
        <Stack
            width='max-content'
            alignSelf='center'
            gap={2}
            sx={{
                padding: '16px',
                animation: `${pop} 0.2s ease 1`,
                backgroundColor: 'background.default',
                justifyContent: 'space-between',
                transition: '0.5s ease transform',
                borderRadius: theme.shape.borderRadius * 2 + 'px !important',
                ...theme.typography['caption2.medium'],
                ':active': {
                    transform: 'scaleX(99%)',
                },
                ':hover': {
                    backgroundColor: theme.palette.primary[1] + '05',
                },
                boxShadow: theme.shadows[1],
                '&::before': {
                    display: 'none',
                },
            }}
        >
            <Box display={'flex'} justifyContent={'space-between'}>
                <CalendarButton
                    id={id}
                    handleClick={(e) => handleClickOpenMenu(e)}
                    caption={calendarRef?.current?.date?.year!}
                    withIcon
                />
                <Menu
                    id='basic-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {yearOptions.map((year: number, idx) => (
                        <MenuItem
                            key={idx}
                            onClick={() => updateYear(year)}
                        >{`${year}`}</MenuItem>
                    ))}
                </Menu>
                {/*<CalendarButton handleClick={goToDay} caption={'امروز'} />*/}
                <Box display={'flex'} gap={2}>
                    <CalendarButton
                        handleClick={() => handleSubmit && handleSubmit(true)}
                        color={'success'}
                        caption={<SvgTick />}
                    />
                    <CalendarButton
                        handleClick={() => handleSubmit && handleSubmit(false)}
                        color={'error'}
                        caption={<SvgClose />}
                    />
                </Box>
            </Box>
            <Stack
                direction={'row'}
                alignItems={'center'}
                borderTop={'1px solid'}
                borderBottom={'1px solid'}
                borderColor={'text.8'}
                minHeight={240}
            >
                <MonthPicker
                    setSelectedIndex={setSelectedIndex}
                    selectedIndex={selectedIndex!}
                    selectorRef={selectorRef}
                    months={months!}
                    updateDate={updateDay}
                    updateMonth={updateMonth}
                />

                <DatePickerCalendar
                    calendar={persian}
                    locale={persian_fa}
                    className={'custom-calender'}
                    ref={calendarRef}
                    shadow
                    multiple
                    buttons={false}
                    hideYear
                    value={date as any}
                    hideMonth
                    weekDays={weekDays ?? defaultWeekDays}
                    minDate={minDate}
                    mapDays={mapDaysFn}
                />
            </Stack>
            {/*<Stack direction={'row-reverse'} gap={2}>*/}
            {/*  <Button*/}
            {/*    color={'success'}*/}
            {/*    size={'small'}*/}
            {/*    sx={{*/}
            {/*      backgroundColor: 'success.5',*/}
            {/*      ':hover': { backgroundColor: 'success.4' },*/}
            {/*    }}*/}
            {/*    onClick={handleSubmit}*/}
            {/*  >*/}
            {/*    حاضر*/}
            {/*  </Button>*/}
            {/*  <Button*/}
            {/*    color={'error'}*/}
            {/*    size={'small'}*/}
            {/*    sx={{*/}
            {/*      backgroundColor: 'error.4',*/}
            {/*      ':hover': { backgroundColor: 'error.3' },*/}
            {/*    }}*/}
            {/*    onClick={handleSubmit}*/}
            {/*  >*/}
            {/*    غایب*/}
            {/*  </Button>*/}
            {/*</Stack>*/}
        </Stack>
    );
};

export default CustomCalendar;
