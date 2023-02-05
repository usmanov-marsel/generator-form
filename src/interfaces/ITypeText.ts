import { IValidationRules } from "./IValidationRules";

export interface ITypeText {
  type: "text";
  name: string;
  placeholder?: string;
  required?: boolean;
  validationRules?: IValidationRules;
  value?: string;
  label?: string;
  class?: string;
  disabled?: boolean;
}
