import { InputHTMLAttributes } from "react";

interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input = ({ name, label, ...props }: InputTypes) => (
  <>
    {" "}
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
    >
      {label}
    </label>
    <input
      id={name}
      {...props}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-gray-300 sm:text-sm"
    />
  </>
);

export default Input;
