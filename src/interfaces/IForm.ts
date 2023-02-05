import { ITypeButton } from "./ITypeButton";
import { ITypeCheckbox } from "./ITypeCheckbox";
import { ITypeFiller } from "./ITypeFiller";
import { ITypeRadio } from "./ITypeRadio";
import { ITypeSelect } from "./ITypeSelect";
import { ITypeText } from "./ITypeText";
import { ITypeTextarea } from "./ITypeTextarea";

export type typeItemForm =
  | ITypeFiller
  | ITypeText
  | ITypeTextarea
  | ITypeCheckbox
  | ITypeButton
  | ITypeSelect
  | ITypeRadio;

export interface IForm {
  name: string;
  items: typeItemForm[];
  postmessage: string;
}
