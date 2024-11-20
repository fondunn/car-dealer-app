import { getManufacturersData } from '@/utils/getManufacturersData';
import { sortByMakeName } from '@/utils/sortByMakeName';
import dynamic from 'next/dynamic';

const DynamicSelectorsContent = dynamic(() => import('./content'));

const CarSelectors = async () => {
  const res = await getManufacturersData();
  if (!res) return null;
  const data = sortByMakeName(res.Results);

  return <DynamicSelectorsContent data={data} />;
};

export default CarSelectors;
