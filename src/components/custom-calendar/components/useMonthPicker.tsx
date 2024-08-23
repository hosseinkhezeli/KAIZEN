//@3rd Party
import React, { useEffect } from 'react';
// ___________________________________________________________________________________

//@Mui
import { Button, Typography, Box } from '@mui/material';
// ___________________________________________________________________________________

//@Assets
import SvgArrowDown from 'ideep-design-system-2/icons/ArrowDown';
// ___________________________________________________________________________________

//@Types
import { IMonthPicker } from '~/components/custom-calendar/components/MonthPicker';

export type direction = 'previous' | 'next';
// ___________________________________________________________________________________

const useMonthPicker = ({
    selectorRef,
    months,
    updateMonth,
    updateDate,
    selectedIndex,
    setSelectedIndex,
}: IMonthPicker) => {
    //Initialization
    useEffect(() => {
        initial();
    }, [selectedIndex]);

    //@Methods
    function initial() {
        const toTranslate = -100 * selectedIndex;
        for (let i = 0; i < months?.length; i++) {
            selectorRef.current[i].style.transform =
                `translateY(${toTranslate}%)`;
        }
    }
    //Change month with navigate buttons
    const navigateMonth = ({ direction }: { direction: direction }) => {
        const toTranslate =
            direction === 'previous'
                ? -100 * (selectedIndex - 2)
                : -100 * selectedIndex;
        setSelectedIndex((prev) =>
            direction === 'previous' ? prev! - 1 : prev! + 1,
        );
        updateDate('month', direction === 'previous' ? -1 : 1);
        for (let i = 0; i < months?.length; i++) {
            selectorRef.current[i].style.transform =
                `translateY(${toTranslate}%)`;
        }
    };

    //Change month with wheel action
    const handleWheelChangeMonth = (e: React.WheelEvent<HTMLDivElement>) => {
        //If Scroll down
        if (e.deltaY > 0) {
            //If it is the end of the list don`t scroll
            if (selectedIndex === months?.length) return false;
            const toTranslate = -100 * selectedIndex;
            for (let i = 0; i < months?.length; i++) {
                selectorRef.current[i].style.transform =
                    `translateY(${toTranslate}%)`;
            }
            setSelectedIndex((prev) => prev! + 1);
            updateMonth('month', selectedIndex);
        } else if (e.deltaY < 0) {
            if (selectedIndex === 1) return false;
            const toTranslate = -100 * (selectedIndex - 2);
            for (let i = 0; i < months?.length; i++) {
                selectorRef.current[i].style.transform =
                    `translateY(${toTranslate}%)`;
            }
            setSelectedIndex((prev) => prev! - 1);
            updateMonth('month', selectedIndex - 2);
        }

        return false;
    };

    //change month with click on months name
    const handleClickMonthItem = (
        e: React.MouseEvent<HTMLDivElement>,
        idx: number,
    ) => {
        if (e) {
            const toTranslate = -100 * idx;
            setSelectedIndex(idx + 1);
            updateMonth('month', idx);
            for (let i = 0; i < months?.length; i++) {
                selectorRef.current[i].style.transform =
                    `translateY(${toTranslate}%)`;
            }
        }
        return false;
    };

    //Components
    const MonthPickerNavigateButton = ({
        direction,
    }: {
        direction: direction;
    }) => (
        <Button
            sx={{
                minWidth: '0',
                padding: '0',
                margin: 0,
                minHeight: 0,
                borderRadius: 0,
                position: 'absolute',
                zIndex: 1,
                height: 16,
                backgroundColor: 'background.4',
                ...(direction === 'previous' ? { top: 0 } : { bottom: 0 }),
            }}
            fullWidth
            disabled={
                direction === 'previous'
                    ? selectedIndex <= 1
                    : selectedIndex > months?.length - 1
            }
            onClick={() => navigateMonth({ direction: direction })}
        >
            <SvgArrowDown
                width={16}
                style={{
                    transform:
                        direction === 'previous' ? 'rotate(180deg)' : 'none',
                }}
            />
        </Button>
    );

    const MonthItem = ({ idx }: { idx: number }) => (
        <Box
            sx={{
                display: 'flex',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
                ref={(el) => {
                    if (el) {
                        selectorRef.current[idx] = el;
                    }
                }}
                key={idx}
                textAlign={'center'}
                sx={{
                    userSelect: 'none',
                    height: 'max-content',
                    lineHeight: 0,
                    display: 'flex',
                    alignItems: 'baseline',
                    transform: `scale(${
                        idx + 1 === selectedIndex
                            ? '100%'
                            : idx + 1 === selectedIndex + 1 ||
                                idx + 1 === selectedIndex - 1
                              ? '80%'
                              : '60%'
                    })`,
                    fontWeight: idx + 1 === selectedIndex ? 500 : 400,
                    opacity:
                        idx + 1 === selectedIndex
                            ? '100%'
                            : idx + 1 === selectedIndex + 1 ||
                                idx + 1 === selectedIndex - 1
                              ? '80%'
                              : '50%',
                }}
            >
                {months[idx]}
            </Typography>
        </Box>
    );

    return {
        MonthPickerNavigateButton,
        handleWheelChangeMonth,
        MonthItem,
        handleClickMonthItem,
    };
};

export default useMonthPicker;
