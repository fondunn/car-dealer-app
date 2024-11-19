export const sortByMakeName = (array: Car[]): Car[] => {
  return [...array].sort((a, b) => a.MakeName.localeCompare(b.MakeName));
};
