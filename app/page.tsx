'use client';
import Image from "next/image";
import Button from "./components/button";
import { useCallback, useEffect, useState } from "react";
import fetchMakes from "./hooks/fetchMakes";
import Select from "./components/select";
import fetchCarMakeData from "./hooks/fetchMakes";
import { useVehicleData } from "./hooks/fetchModel";
import Loader from "./components/loader";

export default function Home() {
  const [makesData, setMakesData] = useState<Array<object>>([]);
  const [selectedMake, setSelectedMake] = useState<string>("");
  

  useEffect(() => {
    fetchData();
  }, [])

  const { models, fetchModels, loading, error } = useVehicleData()

  const fetchData = async () => {
    const res = await fetchCarMakeData();
    setMakesData(res);
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMake = event.target.value;
    setSelectedMake(selectedMake);
  }

  const fetchModel = async () => {
    await fetchModels(selectedMake);
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center font-sans text-black bg-white">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white sm:items-start">
        <section className="align-self-center items-center bg-gray-100 rounded-md w-full flex flex-col justify-center p-8 shadow-md">
          <h1 className="text-2xl font-[aller] p-4 font-bold text-gray-900 mb-4">
            Car Makes & Models
          </h1>

          <div className="w-full">

            <Select options={makesData} onChange={handleSelectChange} value={selectedMake} />
          </div>
          <div className="w-34 h-12 mt-10">
            <Button onClick={fetchModel} name="Fetch Model Data" />
          </div>
        </section>
        <section className="rounded-md p-8 w-full h-full mt-4 bg-blue-100">
          {loading ? (
            <> Loading Model. Please wait!
              < Loader />
            </>
          ) :
            (
              models ? (
                <ul>
                  <li>{models?.Model_Name}</li>
                  <li key={models?.Make_ID}> {models.Make_Name} {models.Model_ID}</li>
                </ul>
              ) : (
                <p className="text-gray-700">{error ? error :
                  "No models fetched yet."}</p>
              ))

          }
        </section>
      </main>
    </div >
  );
}
