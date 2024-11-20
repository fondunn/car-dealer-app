export async function getVehicleData(makeId: string, year: string) {
  try {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );
    if (!res.ok) throw new Error(`Error fetching data: ${res.statusText}`);
    return res.json();
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
    return { Results: [] };
  }
}
