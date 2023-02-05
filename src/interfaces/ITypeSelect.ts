import { IValidationRules } from "./IValidationRules";

interface IOption {
  value: string;
  text: string;
  selected: boolean;
}

export interface ITypeSelect {
  type: "select";
  name: string;
  placeholder?: string;
  required?: boolean;
  validationRules?: IValidationRules;
  value?: string;
  label?: string;
  class?: string;
  disabled?: boolean;
  options: IOption[];
}
