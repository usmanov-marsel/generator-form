import { MouseEventHandler, useState } from "react";
import "./App.css";
import form1 from "./form1.json";
import form2 from "./form2.json";
import { Form } from "./components/Form";
import { IForm } from "./interfaces/IForm";

function App() {
  const onClickFirst: MouseEventHandler<HTMLButtonElement> = (e) => {
    setInput(form1.form as IForm);
  };

  const onClickSecond: MouseEventHandler<HTMLButtonElement> = (e) => {
    setInput(form2.form as IForm);
  };

  const [input, setInput] = useState<IForm>(form1.form as IForm);
  return (
    <div className="App">
      <div className="choice">
        <button onClick={onClickFirst}>Form1</button>
        <button onClick={onClickSecond}>Form2</button>
      </div>
      <Form input={input} />
    </div>
  );
}

export default App;
