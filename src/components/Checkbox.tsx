import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { ITypeCheckbox } from "../interfaces/ITypeCheckbox";

interface ICheckbox extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: ITypeCheckbox;
}

const Checkbox = ({ item, className, ...props }: ICheckbox) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="checkbox" {...props}>
      <label className="item-label" htmlFor={item.name}>
        {item.label}
      </label>
      <input
        {...register(item.name, { required: item.required })}
        id={item.name}
        className="item-checkbox"
        type={item.type}
        placeholder={item.placeholder}
        defaultValue={item.value}
      />
      {errors[item.name] && <p className="error">Поле обязательно к заполнению!</p>}
    </div>
  );
};

export default Checkbox;
