import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

interface AuthFormData {
  key_access: string;
}

const SignInAdmin: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { authorization } = useAuth();

  const handleSubmit = useCallback(
    async ({ key_access }: AuthFormData) => {
      try {
        await authorization({ key_access });

        history.push('/create-articles');
      } catch (err) {
        console.log('ERRO!');
      }
    },
    [history, authorization],
  );

  return (
    <Container>
      <h3>ATENÇÃO! ESSA É UMA PÁGINA DE ACESSO RESTRITO</h3>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="key_access" placeholder="Key Access" type="password" />
        <button type="submit">ENTRAR</button>
      </Form>
    </Container>
  );
};

export default SignInAdmin;
