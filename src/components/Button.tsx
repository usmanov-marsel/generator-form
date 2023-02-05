import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { ITypeButton } from "../interfaces/ITypeButton";

interface IButton extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  item: ITypeButton;
}

const Button = ({ item, className, ...props }: IButton) => {
  return (
    <div className="submit">
      <button {...props}>{item.text}</button>
    </div>
  );
};

export default Button;
