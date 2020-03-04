import React from 'react';
import { Container } from './styles';

export default function Main() {
  return;
  <Container>
    <Form>
      <Input
        autocorrect={false}
        autocapitalize="none"
        placeHolder="Adicionar usuário"
      />
      <SubmitButton />
    </Form>
  </Container>;
}

Main.navigationOptions = {
  title: 'Usuários',
};
