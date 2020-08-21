import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
// import api from '../../services/api';

import { Container } from './styles';

interface AuthFormData {
  key_access: string;
}

const SignInAdmin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push('/admin-dashboard');
  }, [history]);

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
