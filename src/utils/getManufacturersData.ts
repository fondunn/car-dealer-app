const API_URI =
  'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json';

export const getManufacturersData = async (): Promise<ManufacturesResponse> => {
  const data = await fetch(API_URI, { next: { revalidate: 3600 } });
  const json = await data.json();
  return json;
};
