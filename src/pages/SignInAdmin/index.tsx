import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

interface AuthFormData {
  key: string;
}

const SignInAdmin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: AuthFormData) => {
      try {
        const schema = Yup.object().shape({
          key: Yup.string().required('Chave de acesso é obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          key: data.key,
        });

        history.push('/admin-dashboard');
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('Error');
      }
    },
    [history, signIn],
  );

  return (
    <Container>
      <h3>ATENÇÃO! ESSA É UMA PÁGINA DE ACESSO RESTRITO</h3>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <Input name="key" type="password" placeholder="Senha" />

          <button type="submit">ENTRAR</button>
        </div>
      </Form>
    </Container>
  );
};

export default SignInAdmin;
