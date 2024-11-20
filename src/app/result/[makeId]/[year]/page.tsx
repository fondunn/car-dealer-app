import MainLayout from '@/components/MainLayout';
import { getManufacturersData } from '@/utils/getManufacturersData';
import { getVehicleData } from '@/utils/getVehicleData';
import { sortByModelName } from '@/utils/sortByModelName';
import type { Metadata } from 'next';

type Params = Promise<{ makeId: string; year: string }>;

// type PathParams = {
//   makeId: string;
//   year: string;
// };

// export async function generateStaticParams() {
//   const data = await getManufacturersData();
//   const currentYear = new Date().getFullYear();
//   const paths = data.Results.flatMap((make: { MakeId: number }) => {
//     const makeId = make.MakeId.toString();
//     const startYear = 2015;
//     return Array.from({ length: currentYear - startYear + 1 }, (_, i) => ({
//       makeId,
//       year: (startYear + i).toString(),
//     }));
//   });

//   return paths.map((param: PathParams) => ({
//     params: param,
//   }));
// }

export async function generateStaticParams() {
  const data = await getManufacturersData();
  const currentYear = new Date().getFullYear();
  const startYear = 2015;

  const paths = data.Results.flatMap((make: { MakeId: number }) => {
    const makeId = make.MakeId.toString();
    return Array.from({ length: currentYear - startYear + 1 }, (_, i) => ({
      makeId,
      year: (startYear + i).toString(),
    }));
  });

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { makeId, year } = await params;
  return {
    title: `Vehicle Models for Make ID ${makeId} (${year})`,
    description: `Explore vehicle models for the year ${year} and make ID ${makeId}.`,
  };
}

const ResultPage = async ({ params }: { params: Params }) => {
  const { makeId, year } = await params;
  const vehicleData = await getVehicleData(makeId, year);
  const sortedResult = sortByModelName(vehicleData.Results);
  return (
    <MainLayout>
      <div className="relative h-full w-full">
        {sortedResult.length > 0 ? (
          <table className="relative w-full">
            <thead>
              <tr>
                <th className="sticky top-14 bg-gray-300 px-6 py-3 text-left text-stone-950 md:top-16">
                  id
                </th>
                <th className="sticky top-14 bg-gray-300 px-6 py-3 text-left text-stone-950 md:top-16">
                  manufacturer
                </th>
                <th className="sticky top-14 bg-gray-300 px-6 py-3 text-left text-stone-950 md:top-16">
                  model
                </th>
                <th className="sticky top-14 bg-gray-300 px-6 py-3 text-left text-stone-950 md:top-16">
                  year
                </th>
              </tr>
            </thead>
            <tbody className="">
              {sortedResult.map((model: CarModel, idx: number) => (
                <tr
                  key={`${model.Make_ID}-${idx}`}
                  className="odd:bg-white even:bg-gray-100 hover:bg-gray-200"
                >
                  <td className="px-6 py-3">{model.Model_ID}</td>
                  <td className="px-6 py-3">{model.Make_Name}</td>
                  <td className="px-6 py-3">{model.Model_Name}</td>
                  <td className="px-6 py-3">{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="mx-auto flex h-full items-center justify-center uppercase">
            Sorry vehicles didnt finded
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ResultPage;
