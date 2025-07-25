import { View, ScrollView, Dimensions } from "react-native";
import { Container, FormCommon, FormSection } from "@components";
import { useAuth } from "@/src/context/AuthContext";
import { z } from "zod";

const formSchema = z.object({
  email: z.string({ message: "Campo obrigatório" }).email("E-mail inválido"),
  password: z.string({ message: "Campo obrigatório" }).min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type iFormSchema = z.infer<typeof formSchema>

export default function SignIn() {
  const { login } = useAuth();

  const fields = [
    { label: "E-mail", key: "email" },
    { label: "Senha", key: "password", keyboardType: "password" },
  ];

  const submit = async (data: iFormSchema) => {
    console.log(data);
    login(data);
  };

  return (
    <ScrollView>
      {/* <Container> */}
      <View style={{ minHeight: Dimensions.get("window").height }}>
        <FormCommon footerLogin>
          <FormSection
            buttonText="Login"
            schema={formSchema}
            fields={fields}
            onSubmit={submit}
          />
        </FormCommon>
      </View>
      {/* </Container> */}
    </ScrollView>
  );
}
