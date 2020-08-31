import React from 'react';

import { FaPowerOff } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <header>
        <p>Seja bem-vindo!</p>
        <button type="button" onClick={signOut}>
          Sair
          <FaPowerOff />
        </button>
      </header>
    </Container>
  );
};

export default Header;
