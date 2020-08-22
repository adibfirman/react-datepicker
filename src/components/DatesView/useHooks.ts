import { IUseListMonth } from './types';

export function useListMonth({ year, month }: IUseListMonth) {
  let maxGenereateList = 42;
  const thisMonth = new Date(year, month + 1, 0);
  const prevMonth = new Date(year, month, 0);

  const startWeekOfThisMonth = new Date(year, month, 1).getDay();
  let totalDaysThisMonth = thisMonth.getDate();
  let totalDaysPrevMonth = prevMonth.getDate();

  const prevMonthOfDays = [];
  const thisMonthOfDays = [];
  const nextMonthOfDays = [];

  for (let i = 0; i < startWeekOfThisMonth; i++) {
    prevMonthOfDays.unshift(totalDaysPrevMonth);
    totalDaysPrevMonth--;
  }

  for (let i = totalDaysThisMonth; i >= 1; i--) {
    thisMonthOfDays.unshift(i);
  }

  for (
    let i = 1;
    i <= maxGenereateList - (startWeekOfThisMonth + totalDaysThisMonth);
    i++
  ) {
    nextMonthOfDays.push(i);
  }

  return { prevMonthOfDays, thisMonthOfDays, nextMonthOfDays };
}
