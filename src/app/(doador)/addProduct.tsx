import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { colors, globalStyles } from "@/src/assets/styles/Global";

const ProductSchema = Yup.object().shape({
  name: Yup.string().required("Nome do produto é obrigatório"),
  description: Yup.string().required("Descrição é obrigatória"),
  price: Yup.number()
    .required("Preço é obrigatório")
    .positive("O preço deve ser maior que zero"),
  category: Yup.string().required("Categoria é obrigatória"),
});

export default function AddProduct() {
  const handleSubmit = (values: any) => {
    console.log("Produto Adicionado:", values);
    // Dadinhos para api que não sabemos se vai dar tempo fazer '-'
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[globalStyles.heading1, styles.title]}>
        Adicionar Produto
      </Text>

      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
          category: "",
        }}
        validationSchema={ProductSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            {/* Nome do Produto */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o nome do produto"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}
            </View>

            {/* Descrição */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Descrição</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Digite uma descrição"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                multiline
              />
              {touched.description && errors.description && (
                <Text style={styles.error}>{errors.description}</Text>
              )}
            </View>

            {/* Preço */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Preço</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o preço"
                onChangeText={handleChange("price")}
                onBlur={handleBlur("price")}
                value={values.price}
                keyboardType="numeric"
              />
              {touched.price && errors.price && (
                <Text style={styles.error}>{errors.price}</Text>
              )}
            </View>

            {/* Categoria */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Categoria</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite a categoria"
                onChangeText={handleChange("category")}
                onBlur={handleBlur("category")}
                value={values.category}
              />
              {touched.category && errors.category && (
                <Text style={styles.error}>{errors.category}</Text>
              )}
            </View>

            {/* Botão de Submissão */}
            <TouchableOpacity
              onPress={handleSubmit as any}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Adicionar Produto</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F7F7F7",
    padding: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  error: {
    fontSize: 12,
    color: "#FF0000",
    marginTop: 5,
  },
  button: {
    backgroundColor: colors.brand3,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
