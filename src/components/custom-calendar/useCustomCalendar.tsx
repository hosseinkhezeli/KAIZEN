//@3rd Party
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CalendarRef, DateObject } from 'react-multi-date-picker';
import { Calendar, Locale } from 'react-date-object';
// ________________________________________________________________________

//@Mui
import { useTheme } from '@mui/material/styles';
// ________________________________________________________________________

//@Method
import { convertNumbers2English } from '~/helpers/methods/methods';
// ________________________________________________________________________

//@Types
import { yearMonths } from '~/types/common';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { ICustomCalendar } from '~/components/custom-calendar/CustomCalendar';

export type SetDateProps = {
    date?: DateObject;
    year?: number;
    month?: number;
    months?: Array<string[]>;
    weekDays?: Array<string[]>;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    calendar?: Calendar;
    locale?: Locale;
    format?: string;
    ignoreList?: string[];
    digits?: string[];
};

export interface ExtendedCalendarRef extends CalendarRef, SetDateProps {}

// ________________________________________________________________________

const useCustomCalendar = ({ trackingData }: ICustomCalendar) => {
    //Dependencies
    const { palette } = useTheme();
    const defaultWeekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
    // const currentDay = Number(
    //   convertNumbers2English(new Date().toLocaleDateString('fa').split('/')[2]),
    // );
    const currentMonth = Number(
        convertNumbers2English(
            new Date().toLocaleDateString('fa').split('/')[1],
        ),
    );
    const currentYear = Number(
        convertNumbers2English(
            new Date().toLocaleDateString('fa').split('/')[0],
        ),
    );

    // __________________________________________________________________________
    const selectorRef = useRef<HTMLElement[]>([]);
    const calendarRef = useRef<ExtendedCalendarRef | undefined>(undefined);
    // __________________________________________________________________________
    const [render, setRender] = useState<boolean>(true);
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
    const [months, setMonths] = useState<yearMonths[] | undefined>(undefined);
    const [date, setDate] = useState<Date | number>(new Date());
    // __________________________________________________________________________
    const allRef = useCallback(
        (node: any) => {
            if (
                calendarRef !== null &&
                months === undefined &&
                selectedIndex === undefined
            ) {
                const monthNames = calendarRef.current?.date?.months?.map(
                    (month) => month.name,
                );
                const currentMonth = calendarRef.current?.date?.month?.index!;
                setSelectedIndex(currentMonth + 1);
                setMonths(monthNames as yearMonths[]);
                setRender(false);
            }
            return node;
        },
        [months],
    );
    // __________________________________________________________________________

    //Year Selector Menu Deps
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    // __________________________________________________________________________

    //@Methods

    //Year Selector Menu Methods
    const handleClickOpenMenu = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        setAnchorEl(event?.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    // __________________________________________________________________________

    //navigate or update calendar Methods
    function updateDay(key: keyof SetDateProps, value: string | number) {
        const date = calendarRef?.current?.date;
        if (date instanceof DateObject) {
            calendarRef?.current?.set(key, (date[key] as string) + value);
        }
    }

    function updateMonth(key: keyof SetDateProps, value: string | number) {
        // const date = calendarRef?.current?.date!;
        const newMonth = calendarRef?.current?.date?.months!;
        const numValue: number = value as number;
        calendarRef?.current?.set(key, `${[[newMonth[numValue]]]}`);
    }

    const updateYear = (year: number) => {
        setAnchorEl(null);
        const date: DateObject | undefined = calendarRef?.current?.date;
        if (date instanceof DateObject) {
            calendarRef?.current?.set('year', (date['year'] = year));
        }
    };

    const goToDay = () => {
        setSelectedIndex(currentMonth);
        const date = calendarRef?.current?.date!;
        calendarRef?.current?.set('year', (date['year'] = currentYear));
        setDate(new Date());
    };

    // __________________________________________________________________________

    //Highlight calendar method
    const mapDaysFn = ({ date }: { date: DateObject }) => {
        let status;
        trackingData.map((record) => {
            if (record.year === date.year) {
                record.months.map((currMonth) => {
                    if (currMonth.index === date.month.index) {
                        if (currMonth.presentDays.includes(date.day))
                            status = 'present';
                        if (currMonth.absentDays.includes(date.day))
                            status = 'absent';
                    }
                });
            }
        });
        if (status) return { className: 'highlight highlight-' + status };
    };
    // __________________________________________________________________________

    //Handle Calendar Colors using css
    const setColors = (colors: PaletteOptions) => {
        const {
            primary: primaryThemeColor,
            shadow,
            text,
            success,
            error,
        } = colors;
        const params = [
            {
                className: '--rmdp-primary-theme',
                value: primaryThemeColor?.main,
            },
            {
                className: '--rmdp-secondary-theme',
                value: primaryThemeColor?.[2],
            },
            { className: '--rmdp-shadow-theme', value: primaryThemeColor?.[1] },
            { className: '--rmdp-today-theme', value: primaryThemeColor?.[5] },
            { className: '--rmdp-hover-theme', value: primaryThemeColor?.[4] },
            {
                className: '--rmdp-deselect-theme',
                value: primaryThemeColor?.[9],
            },
            { className: '--rmdp-box-shadow-theme', value: shadow[2] },
            { className: '--rmdp-text-primary', value: text?.primary },
            { className: '--rmdp-text-secondary', value: text?.secondary },
            { className: '--rmdp-box-border', value: text?.[11] },
            { className: '--rmdp-error-theme', value: error?.['1'] },
            { className: '--rmdp-success-theme', value: success?.['1'] },
        ];
        params.forEach((param: { className: string; value?: string }) =>
            document.documentElement.style.setProperty(
                param.className!,
                param.value!,
            ),
        );
    };

    useEffect(() => {
        allRef(calendarRef);
        setColors(palette);
    }, [render, palette]);
    return {
        selectorRef,
        selectedIndex,
        setSelectedIndex,
        months,
        calendarRef,
        date,
        updateDay,
        updateMonth,
        defaultWeekDays,
        id,
        open,
        handleCloseMenu,
        handleClickOpenMenu,
        anchorEl,
        mapDaysFn,
        updateYear,
        goToDay,
    };
};

export default useCustomCalendar;
