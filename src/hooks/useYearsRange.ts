import { useMemo } from 'react';

export const useYearsRange = (startYear: number): string[] => {
  return useMemo(() => {
    const currentYear = new Date().getFullYear();
    if (startYear > currentYear) {
      return [];
    }
    const years: string[] = [];
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year.toString());
    }

    return years;
  }, [startYear]);
};
