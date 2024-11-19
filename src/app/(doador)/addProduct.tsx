import React from "react";
import { ScrollView, Alert, Text } from "react-native";
import { z } from "zod";
import { FormCommon, FormSection } from "@/src/components";
import { globalStyles } from "@/src/assets/styles/Global";

const ProductSchema = z.object({
  name: z.string({ required_error: "Nome do produto é obrigatório" }),
  description: z.string({ required_error: "Descrição é obrigatória" }),
  weight: z
    .number({ required_error: "Peso é obrigatório" })
    .positive("O peso deve ser maior que zero"),
  category: z.string({ required_error: "Categoria é obrigatória" }),
});

const fields = [
  { label: "Nome", key: "name" },
  { label: "Descrição", key: "description", isTextArea: true }, // Marcar como área de texto
  { label: "Peso", key: "weight" },
  { label: "Categoria", key: "category" },
];

export default function AddProduct() {
  const handleSubmit = (values: any) => {
    console.log("Produto Adicionado:", values);
    Alert.alert(
      "Produto Adicionado!",
      "Realmente deseja adicionar esse alimento?",
      [{ text: "Confirmar", style: "default" }]
    );
    // Dadinhos para api que não sabemos se vai dar tempo fazer '-'
  };

  return (
    <ScrollView className="h-24 flex-grow bg-slate-50 p-5">
      <Text className="text-center mb-5" style={globalStyles.heading1}>
        Adicionar Produto
      </Text>

      <FormSection
        buttonText="Adicionar Alimento"
        schema={ProductSchema}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </ScrollView>
  );
}
