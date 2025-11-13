import React, { SelectHTMLAttributes } from 'react'
import Loader from '../loader';

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
    options?: object[];
}

const Select = ({ options, ...props }: Props) => {
    return (<>
        <label htmlFor="car-makes" className="block mb-2 text-sm font-medium text-gray-900 ">Select Car Make</label>
        <select {...props} className=" border text-sm rounded-lg   w-full p-2.5  ">
            <option value="">-- Please choose an option --</option>
            {options !== null ? options?.map((option: any) => (
                <option key={option.Make_ID} value={option.Make_Name}>{option.Make_Name}</option>
            )) : <Loader />}
        </select>
    </>
    )
}

export default Select