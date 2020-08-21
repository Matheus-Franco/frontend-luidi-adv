import React from 'react';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <header>
        <p>Seja Bem-Vindo, Admin!</p>
        <button type="button" onClick={signOut}>
          Sair
        </button>
      </header>
    </Container>
  );
};

export default Header;
