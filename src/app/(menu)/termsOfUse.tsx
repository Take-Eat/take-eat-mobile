import { globalStyles } from "@/src/assets/styles/Global";
import { Container } from "@/src/components";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function termsOfUse() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex gap-3">
          {/* Título Principal - Equivalente ao h1 */}
          <Text style={globalStyles.heading1} className="text-center">Termos de Uso Take Eat</Text>

          {/* Seção de Introdução */}
          <Text style={globalStyles.textRegularGray}>
            Bem-vindo! Ao usar o Take Eat, você concorda com os seguintes Termos
            de Uso. Por favor, leia atentamente.
          </Text>

          {/* Seção 1 */}
          <Text style={globalStyles.heading2}>1. Introdução</Text>
          <Text style={globalStyles.textRegularGray}>
            Este aplicativo foi criado para fornecer [descrição breve da
            aplicação]. O uso da plataforma implica a aceitação de todas as
            condições descritas aqui.
          </Text>

          {/* Seção 2 */}
          <Text style={globalStyles.heading2}>2. Responsabilidades do Usuário</Text>
          <Text style={globalStyles.textRegularGray}>
            Ao utilizar este aplicativo, o usuário se compromete a respeitar todas
            as políticas e regulamentações aplicáveis, incluindo, mas não se
            limitando a:
          </Text>
          <Text style={globalStyles.heading3}>2.1 Conteúdo e Uso</Text>
          <Text style={globalStyles.textRegularGray}>
            O usuário deve garantir que todas as informações fornecidas sejam
            precisas e que o uso da plataforma seja feito de forma responsável.
          </Text>
          <Text style={globalStyles.heading3}>2.2 Conformidade Legal</Text>
          <Text style={globalStyles.textRegularGray}>
            O usuário deve obedecer todas as leis aplicáveis ao utilizar o
            serviço, bem como os direitos de terceiros.
          </Text>

          {/* Seção 3 */}
          <Text style={globalStyles.heading2}>3. Limitações de Responsabilidade</Text>
          <Text style={globalStyles.textRegularGray}>
            Não nos responsabilizamos por quaisquer danos resultantes do uso deste
            aplicativo, exceto nos casos em que a lei o exija.
          </Text>

          {/* Seção 4 */}
          <Text style={globalStyles.heading2}>4. Modificações nos Termos</Text>
          <Text style={globalStyles.textRegularGray}>
            Reservamo-nos o direito de atualizar estes Termos de Uso a qualquer
            momento. Recomendamos que os usuários revisem esta página
            periodicamente para se manterem informados sobre possíveis alterações.
          </Text>

          {/* Conclusão */}
          <Text style={globalStyles.textRegularGray}>
            Agradecemos por utilizar nosso aplicativo. Se tiver dúvidas sobre
            nossos Termos de Uso, entre em contato conosco.
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
}
