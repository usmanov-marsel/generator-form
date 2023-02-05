import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { ITypeSelect } from "../interfaces/ITypeSelect";

interface ISelect extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: ITypeSelect;
}

const Select = ({ item, className, ...props }: ISelect) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={className} {...props}>
      <label className="item-label" htmlFor={item.name}>
        {item.label}
      </label>
      <select
        className="item-input"
        {...register(item.name, { required: item.required })}
        id={item.name}
      >
        {item.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
      {errors[item.name] && <p className="error">Поле обязательно к заполнению!</p>}
    </div>
  );
};

export default Select;
