import { Container, DataUpdate } from '@/src/components';
import { ScrollView } from 'react-native';


export default function PersonalData() {

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DataUpdate />
      </ScrollView>
    </Container>
  );
}