import React from 'react';

import { Container } from './styles';

const AdminDashboard: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <button type="button">
            <p>DELETAR ARTIGO</p>
          </button>
          <button type="button">
            <p>ADICIONAR ARTIGO</p>
          </button>
        </div>
      </Container>
    </>
  );
};

export default AdminDashboard;
