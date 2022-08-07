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
      className="block text-sm font-medium text-inside-text-light"
    >
      {label}
    </label>
    <input
      id={name}
      {...props}
      className="mt-1 block w-full rounded-md bg-inside-bg-light text-inside-text-light shadow-sm focus:border-inside-red-light focus:ring-inside-red-light sm:text-sm"
    />
  </>
);

export default Input;
