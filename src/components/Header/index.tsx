import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <p>Seja Bem-Vindo, Admin!</p>
        <button type="button">Sair</button>
      </header>
    </Container>
  );
};

export default Header;
