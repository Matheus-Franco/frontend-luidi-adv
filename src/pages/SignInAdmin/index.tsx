import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

interface AuthFormData {
  email: string;
  password: string;
}

const SignInAdmin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: AuthFormData) => {
      await signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/admin-dashboard');
    },
    [history, signIn],
  );

  return (
    <Container>
      <h3>ATENÇÃO! ESSA É UMA PÁGINA DE ACESSO RESTRITO</h3>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />

          <button type="submit">ENTRAR</button>
        </div>
      </Form>
    </Container>
  );
};

export default SignInAdmin;
