import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { ITypeText } from "../interfaces/ITypeText";
import cn from "classnames";

interface IText extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: ITypeText;
}

const Text = ({ item, className, ...props }: IText) => {
  const getPattern = (item: ITypeText) => {
    if (item.validationRules?.type === "tel") {
      return /[+7|8][0-9]{10}/;
    }
    return /.*/;
  };
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={className} {...props}>
      <label className="item-label" htmlFor={item.name}>
        {item.label}
      </label>
      <input
        {...register(item.name, {
          required: item.required,
          pattern: { value: getPattern(item), message: "Не соответствует шаблону" },
        })}
        id={item.name}
        type={item.validationRules?.type || item.type}
        placeholder={item.placeholder}
        defaultValue={item.value}
        className={cn(item.class, "item-input")}
        disabled={item.disabled}
      />
      {errors[item.name]?.type === "required" && (
        <p className="error">Поле обязательно к заполнению!</p>
      )}
      {errors[item.name]?.type === "pattern" && <p className="error">Не соответствует шаблону!</p>}
    </div>
  );
};

export default Text;
