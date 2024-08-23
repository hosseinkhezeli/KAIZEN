//@3rd Party
import React, { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
// ________________________________________________________________________

//@Mui
import { Stack, Box } from '@mui/material';
// ________________________________________________________________________

//@Hooks
import { SetDateProps } from '~/components/custom-calendar/useCustomCalendar';
// ________________________________________________________________________

//@Types
import { yearMonths } from '~/types/common';
import useMonthPicker from '~/components/custom-calendar/components/useMonthPicker';

export interface IMonthPicker {
    selectedIndex: number;
    setSelectedIndex: Dispatch<SetStateAction<number | undefined>>;
    selectorRef: MutableRefObject<HTMLElement[]>;
    months: yearMonths[];
    updateDate: (key: keyof SetDateProps, value: string | number) => void;
    updateMonth: (key: keyof SetDateProps, value: string | number) => void;
}

// ________________________________________________________________________

const MonthPicker: FC<IMonthPicker> = ({
    selectedIndex,
    setSelectedIndex,
    selectorRef,
    months,
    updateDate,
    updateMonth,
}) => {
    const {
        MonthPickerNavigateButton,
        handleWheelChangeMonth,
        MonthItem,
        handleClickMonthItem,
    } = useMonthPicker({
        selectedIndex,
        setSelectedIndex,
        selectorRef,
        months,
        updateDate,
        updateMonth,
    });
    return (
        <>
            <Box
                height={'100%'}
                position={'relative'}
                sx={{ overflowY: 'hidden' }}
                bgcolor={'text.3'}
            >
                <MonthPickerNavigateButton direction={'previous'} />
                <Stack
                    width={'max-content'}
                    px={'1rem'}
                    bgcolor={'text.3'}
                    zIndex={10}
                    height={210}
                    onWheel={(e) => handleWheelChangeMonth(e)}
                    sx={{
                        transform: 'translateY(calc(100% - 75px))',
                        '::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >
                    {months?.map((_, idx: number) => (
                        <Box
                            key={idx}
                            ref={(el) => {
                                if (el) {
                                    selectorRef.current[idx] =
                                        el as HTMLElement;
                                }
                            }}
                            sx={{
                                height: '15%',
                                flexShrink: 0,
                                transition: '0.15s ease all',
                                borderTop: '1px solid',
                                borderBottom: '1px solid',
                                borderColor:
                                    idx + 1 === selectedIndex
                                        ? 'grey.5'
                                        : 'transparent',
                            }}
                            onClick={(e) => handleClickMonthItem(e, idx)}
                        >
                            <MonthItem idx={idx} />
                        </Box>
                    ))}
                </Stack>
                <MonthPickerNavigateButton direction={'next'} />
            </Box>
        </>
    );
};

export default MonthPicker;
