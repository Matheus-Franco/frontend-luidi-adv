import React, { useCallback, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import api from '../../services/api';

import { Container } from './styles';

interface FormData {
  article_id: string;
}

const SignInAdmin: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async ({ article_id }: FormData) => {
      await api.delete('/admin/del-article', {
        article_id,
      });

      history.push('/create-articles');
    },
    [history],
  );

  return (
    <Container>
      <header>
        <Link to="/create-articles">Voltar</Link>
      </header>

      <div>
        <h3>Deletar Artigo</h3>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="article_id" placeholder="ID do Artigo" type="password" />
          <button type="submit">DELETAR</button>
        </Form>
      </div>
    </Container>
  );
};

export default SignInAdmin;
