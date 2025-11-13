import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button = ({ name, ...props }: Props) => {
  return (
    <button {...props} className="bg-blue-400 rounded-md p-2 w-full text-sm items-center flex justify-center h-full text-white" >
      {name}
    </button>
  );
};

export default Button;
