export function useListMonth() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const totalDaysThisMonth = new Date(year, month, 0).getDate();
  const maxGenereateList = 35;
  const additionalDayNextMonth = Array(maxGenereateList - totalDaysThisMonth)
    .fill(null)
    .map((_, i) => i + 1);

  const list = Array(totalDaysThisMonth)
    .fill(null)
    .map((_, i) => i + 1);

  return { list, additionalDayNextMonth };
}
