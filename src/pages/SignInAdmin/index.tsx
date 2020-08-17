import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const SignInAdmin: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push('/create-articles');
  }, [history]);

  return (
    <Container>
      <h3>ATENÇÃO! ESSA É UMA PÁGINA DE ACESSO RESTRITO</h3>

      <input placeholder="Key Access" type="password" />
      <button onClick={handleSubmit} type="submit">
        ENTRAR
      </button>
    </Container>
  );
};

export default SignInAdmin;
