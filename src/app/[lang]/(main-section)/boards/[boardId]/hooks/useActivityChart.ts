'use client';
import { useState } from 'react';

type TUseActivityChartProps = {
  data: IBoardActivityLog[] | undefined;
};

export function useActivityChart(props: TUseActivityChartProps) {
  const [year, setYear] = useState(2023);

  const getDaysInYear = (year: number) => {
    const days = [];
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    let currentDate = startDate;
    while (currentDate <= endDate) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }
    return days;
  };

  const contributionsByDay: any = {};
  props?.data?.forEach(({ timestamp }) => {
    const date = new Date(timestamp).toISOString().split('T')[0];
    contributionsByDay[date] = (contributionsByDay[date] || 0) + 1; // Count contributions by day
  });

  const daysInYear = getDaysInYear(year);
  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(new Date(Date.now()).setMonth(i + 1)).getMonth(),
  );
  return { months, daysInYear, contributionsByDay, setYear, year };
}
