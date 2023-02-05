import { IValidationRules } from "./IValidationRules";

export interface ITypeCheckbox {
  type: "checkbox";
  name: string;
  placeholder?: string;
  required?: boolean;
  validationRules?: IValidationRules;
  value?: string;
  label?: string;
  class?: string;
  disabled?: boolean;
  checked: boolean;
}
