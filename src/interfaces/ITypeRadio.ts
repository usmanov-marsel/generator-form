import { IValidationRules } from "./IValidationRules";

interface IItems {
  value: string;
  label: string;
  checked: string;
}

export interface ITypeRadio {
  type: "radio";
  name: string;
  placeholder?: string;
  required?: boolean;
  validationRules?: IValidationRules;
  value?: string;
  label?: string;
  class?: string;
  disabled?: boolean;
  items: IItems[];
}
