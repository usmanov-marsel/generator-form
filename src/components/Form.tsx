import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { IForm } from "../interfaces/IForm";
import ItemForm from "./ItemForm";

interface IFormProps {
  input: IForm;
}

export const Form = ({ input }: IFormProps) => {
  useEffect(() => {
    methods.reset();
  }, [input]);

  const methods = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {input.items.map((item, i) => (
          <ItemForm item={item} key={i} />
        ))}
      </form>
    </FormProvider>
  );
};
