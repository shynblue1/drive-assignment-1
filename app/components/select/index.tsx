import React, { SelectHTMLAttributes } from 'react'

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
    options?: object[];
    loading?: boolean;
}

const Select = ({ options, loading, ...props }: Props) => {
    return (<>
        <label htmlFor="car-makes" className="block mb-2 text-sm font-medium text-gray-900 ">Select Car Make</label>
        <select {...props} className=" border text-sm rounded-lg   w-full p-2.5  ">
            <option value="">-- Please choose an option --</option>
            {loading && <option disabled>Loading makes...</option>}
            {options !== null ? options?.map((option: any) => (
                <option key={option.Make_ID} value={option.Make_Name}>{option.Make_Name}</option>
            )) : <option value="">No makes data available</option>}
        </select >
    </>
    )
}

export default Select