import { Container } from "@/src/components";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function termsOfUse() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Título Principal - Equivalente ao h1 */}
        <Text style={styles.heading1}>Termos de Uso Take Eat</Text>

        {/* Seção de Introdução */}
        <Text style={styles.paragraph}>
          Bem-vindo! Ao usar o Take Eat, você concorda com os seguintes Termos
          de Uso. Por favor, leia atentamente.
        </Text>

        {/* Seção 1 */}
        <Text style={styles.heading2}>1. Introdução</Text>
        <Text style={styles.paragraph}>
          Este aplicativo foi criado para fornecer [descrição breve da
          aplicação]. O uso da plataforma implica a aceitação de todas as
          condições descritas aqui.
        </Text>

        {/* Seção 2 */}
        <Text style={styles.heading2}>2. Responsabilidades do Usuário</Text>
        <Text style={styles.paragraph}>
          Ao utilizar este aplicativo, o usuário se compromete a respeitar todas
          as políticas e regulamentações aplicáveis, incluindo, mas não se
          limitando a:
        </Text>
        <Text style={styles.heading3}>2.1 Conteúdo e Uso</Text>
        <Text style={styles.paragraph}>
          O usuário deve garantir que todas as informações fornecidas sejam
          precisas e que o uso da plataforma seja feito de forma responsável.
        </Text>
        <Text style={styles.heading3}>2.2 Conformidade Legal</Text>
        <Text style={styles.paragraph}>
          O usuário deve obedecer todas as leis aplicáveis ao utilizar o
          serviço, bem como os direitos de terceiros.
        </Text>

        {/* Seção 3 */}
        <Text style={styles.heading2}>3. Limitações de Responsabilidade</Text>
        <Text style={styles.paragraph}>
          Não nos responsabilizamos por quaisquer danos resultantes do uso deste
          aplicativo, exceto nos casos em que a lei o exija.
        </Text>

        {/* Seção 4 */}
        <Text style={styles.heading2}>4. Modificações nos Termos</Text>
        <Text style={styles.paragraph}>
          Reservamo-nos o direito de atualizar estes Termos de Uso a qualquer
          momento. Recomendamos que os usuários revisem esta página
          periodicamente para se manterem informados sobre possíveis alterações.
        </Text>

        {/* Conclusão */}
        <Text style={styles.paragraph}>
          Agradecemos por utilizar nosso aplicativo. Se tiver dúvidas sobre
          nossos Termos de Uso, entre em contato conosco.
        </Text>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#443936",
  },
  heading2: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 16,
    color: "#444444",
  },
  heading3: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 6,
    marginTop: 12,
    color: "#555555",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666666",
    marginBottom: 12,
  },
});
