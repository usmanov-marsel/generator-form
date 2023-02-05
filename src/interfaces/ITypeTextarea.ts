import { IValidationRules } from "./IValidationRules";

export interface ITypeTextarea {
  type: "textarea";
  name: string;
  placeholder?: string;
  required?: boolean;
  validationRules?: IValidationRules;
  value?: string;
  label?: string;
  class?: string;
  disabled?: boolean;
}
