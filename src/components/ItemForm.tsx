import { typeItemForm } from "../interfaces/IForm";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Select from "./Select";
import Text from "./Text";
import Textarea from "./Textarea";

interface IItemFormProps {
  item: typeItemForm;
}

const ItemForm = ({ item }: IItemFormProps) => {
  switch (item.type) {
    case "filler":
      return <div className="filler" dangerouslySetInnerHTML={{ __html: item.message }}></div>;
    case "text":
      return <Text className="item" item={item} />;
    case "textarea":
      return <Textarea className="item" item={item} />;
    case "checkbox":
      return <Checkbox className="item" item={item} />;
    case "button":
      return <Button className="item" item={item} />;
    case "select":
      return <Select className="item" item={item} />;
    case "radio":
      return <Radio item={item} />;
  }
};

export default ItemForm;
