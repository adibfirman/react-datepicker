import { IUseListMonth } from './types';

export function useListMonth({ year, month }: IUseListMonth) {
  const totalDaysThisMonth = new Date(year, month + 1, 0).getDate();
  const maxGenereateList = 35;
  const additionalDayNextMonth = Array(maxGenereateList - totalDaysThisMonth)
    .fill(null)
    .map((_, i) => i + 1);

  const list = Array(totalDaysThisMonth)
    .fill(null)
    .map((_, i) => i + 1);

  return { list, additionalDayNextMonth };
}
