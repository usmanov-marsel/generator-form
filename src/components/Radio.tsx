import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { ITypeRadio } from "../interfaces/ITypeRadio";

interface IRadio extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: ITypeRadio;
}

const Radio = ({ item, className, ...props }: IRadio) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="radio" {...props}>
      {item.items.map((radioItem) => (
        <div key={radioItem.value}>
          <label htmlFor={radioItem.value}>{radioItem.label}</label>
          <input
            {...register(item.name, { required: item.required })}
            id={radioItem.value}
            type={item.type}
            value={radioItem.value}
          />
        </div>
      ))}
      {errors[item.name] && <p className="error">Поле обязательно к заполнению!</p>}
    </div>
  );
};

export default Radio;
