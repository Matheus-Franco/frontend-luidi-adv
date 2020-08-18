import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const ArticleFormAdmin: React.FC = () => {
  return (
    <Container>
      <h3>Adicionar novo Artigo</h3>
      <Link to="/delete-articles">Excluir Artigo</Link>
    </Container>
  );
};

export default ArticleFormAdmin;
