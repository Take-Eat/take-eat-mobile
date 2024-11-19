import React from "react";
import { View } from "react-native";
import FormInput from "../formInput";
import CustomButton from "../customButton";

import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";

type GenericSchemaProps<T> = {
  schema: T;
  buttonText?: string;
  fields: {
    label: string;
    key: string;
    keyboardType?: string;
    isTextArea?: boolean;
  }[];
  onSubmit: (data: any) => void;
};

export default function FormSection<T extends ZodType<any>>({
  schema,
  buttonText,
  fields,
  onSubmit,
}: GenericSchemaProps<T>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <View className="flex w-full gap-2">
      {fields.map((formField) => {
        const { field } = useController({
          control,
          defaultValue: "",
          name: formField.key,
        });
        return (
          <FormInput
            key={formField.key}
            name={formField.key}
            title={formField.label}
            value={field.value}
            handleChangeText={field.onChange}
            keyboardType={formField.keyboardType}
            isTextArea={formField.isTextArea} // Passa a prop isTextArea
          />
        );
      })}
      <CustomButton
        title={buttonText ? buttonText : "Registrar"}
        handlePress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
