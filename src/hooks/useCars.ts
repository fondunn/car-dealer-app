import { sortByMakeName } from '@/utils/sortByMakeName';
import { useEffect, useState } from 'react';

type FetchState = boolean;
type CarsState = null | Car[];

const initialCarsState = null;
const initialFetchState: FetchState = true;

export const useCars = () => {
  const [loading, setLoading] = useState<FetchState>(initialFetchState);

  const [data, setData] = useState<CarsState>(initialCarsState);

  useEffect(() => {
    if (loading) {
      const fetchData = async () => {
        const data = await fetch(
          'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json',
        );
        const json = await data.json();
        return json;
      };
      fetchData()
        .then((data) => setData(sortByMakeName(data?.Results)))
        .finally(() => setLoading(false));
    }
  }, [loading]);

  return {
    loading,
    data,
  };
};
