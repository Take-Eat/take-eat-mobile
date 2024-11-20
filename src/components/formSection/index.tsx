import React from "react";
import { Text, View } from "react-native";
import FormInput from "../formInput";
import CustomButton from "../customButton";

import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType } from "zod";


type GenericSchemaProps<T> = {
    schema: T;
    buttonText?: string;
    fields: { label: string; key: string; keyboardType?: string }[];
    onSubmit: (data: any) => void;
};


export default function FormSection<T extends ZodType<any>>({ schema, buttonText, fields, onSubmit }: GenericSchemaProps<T>) {
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
                    // defaultValue: "",
                    name: formField.key
                })

                const fieldError = errors[formField.key]?.message as string;
                return (
                    <>
                        <FormInput
                            key={formField.key}
                            name={formField.key}
                            title={formField.label}
                            value={field.value}
                            handleChangeText={field.onChange}
                            keyboardType={formField.keyboardType}
                        />
                        {fieldError && <Text className="text-red-600">{fieldError}</Text>}
                    </>
                )
            })}
            <CustomButton title={buttonText ? buttonText : "Registrar"} handlePress={handleSubmit(onSubmit)} />
        </View>
    );
};
