import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { ITypeTextarea } from "../interfaces/ITypeTextarea";

interface ITextarea extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: ITypeTextarea;
}

const Textarea = ({ item, className, ...props }: ITextarea) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={className} {...props}>
      <label className="item-label" htmlFor={item.name}>
        {item.label}
      </label>
      <textarea
        {...register(item.name, { required: item.required })}
        id={item.name}
        className="item-input"
        defaultValue={item.value}
      ></textarea>
      {errors[item.name] && <p className="error">Поле обязательно к заполнению!</p>}
    </div>
  );
};

export default Textarea;
