export default async function fetchCarMakeData() {
  try {
    const data = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
    );
    const res = await data.json();
    return res?.Results;
  } catch (err) {
    throw new Error("Failed to fetch makes data");
  }
};

