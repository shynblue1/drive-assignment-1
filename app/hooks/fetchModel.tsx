import React, { useState } from 'react'

type Props = {}

export const useVehicleData = () => {
    const [models, setModels] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [modelsError, setModelsError] = useState("");

    const fetchModels = async (makeName: string) => {
        setLoading(true);
        setModelsError("");
        setModels([]);

        try {
            const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${makeName}?format=json`);

            if (res.status == 404) {
                setModelsError("The resource you are looking for has been removed, had its name changed, or is temporarily unavailable.");
                // return;
            }

            const data = await res.json();
            setModels(data?.Results?.[0]);
        } catch (e) {
            setModels([]);
            setModelsError("Failed to fetch vehicle models.");

        } finally {
            setLoading(false);
        }
    };

    return {
        models,
        loading,
        error: modelsError,
        fetchModels,
    };
}
