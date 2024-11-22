import { globalStyles } from '@/src/assets/styles/Global';
import { Container, DataUpdate } from '@/src/components';
import { ScrollView, Text } from 'react-native';


export default function PersonalData() {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <DataUpdate />
      </Container>
    </ScrollView>
  );
}