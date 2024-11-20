export const sortByModelName = (array: CarModel[]): CarModel[] => {
  return [...array].sort((a, b) => a.Model_Name.localeCompare(b.Model_Name));
};
