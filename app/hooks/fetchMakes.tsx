import { useEffect, useState } from "react";

export const useCarMakeData = () => {
  const [makes, setMakes] = useState<Array<object>>([]);
  const [loading, setLoading] = useState(false);
  const [makesError, setMakesError] = useState("");

  useEffect(() => {
    fetchMakes();
  }, []);

  const fetchMakes = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
      );
      const res = await data.json();
      setMakes(res?.Results);
    } catch (err) {
      throw new Error("Failed to fetch makes data");
    }
    finally {
      setLoading(false);
    }
  }

  return {
    makes,
    loading,
    error: makesError,
  }
};

