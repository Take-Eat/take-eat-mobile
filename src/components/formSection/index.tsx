import React from "react";
import { View } from "react-native";
import FormInput from "../formInput";
import CustomButton from "../customButton";

interface FormSectionProps {
    formData: { [key: string]: string };
    handleChange: (field: string, value: string) => void;
    buttonText?: string;
    fields: { label: string; key: string; keyboardType?: string }[];
    onSubmit: () => void;
}

export default function FormSection({ formData, handleChange, buttonText, fields, onSubmit }: FormSectionProps) {
    return (
        <View className="flex w-full gap-2">
            {fields.map((field) => (
                <FormInput
                    key={field.key}
                    title={field.label}
                    value={formData[field.key]}
                    handleChangeText={(value) => handleChange(field.key, value)}
                    keyboardType={field.keyboardType}
                />
            ))}
            <CustomButton title={buttonText ? buttonText : "Registrar"} handlePress={onSubmit} />
        </View>
    );
};
