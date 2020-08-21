import React, { useState, useCallback } from 'react';

import ModalAddArticle from '../../components/ModalAddArticle';
import ModalRemoveArticle from '../../components/ModalRemoveArticle';

import { Container } from './styles';

interface IArticle {
  id: string;
  title: string;
  content: string;
  lawyer_name: string;
  image: string;
}

const AdminDashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  const handleAddArticle = useCallback(() => {
    console.log('handleAddArticle test');
  }, []);

  const handleRemoveArticle = useCallback(() => {
    console.log('handleRemoveArticle test');
  }, []);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleRemoveModal(): void {
    setRemoveModalOpen(!removeModalOpen);
  }

  return (
    <>
      <Container>
        <div>
          <ModalAddArticle
            isOpen={modalOpen}
            setIsOpen={toggleModal}
            handleAddArticle={handleAddArticle}
          />

          <ModalRemoveArticle
            isOpen={removeModalOpen}
            setIsOpen={toggleRemoveModal}
            handleRemoveArticle={handleRemoveArticle}
          />

          <button type="button" onClick={toggleRemoveModal}>
            <p>DELETAR ARTIGO</p>
          </button>

          <button type="button" onClick={toggleModal}>
            <p>ADICIONAR ARTIGO</p>
          </button>
        </div>
      </Container>
    </>
  );
};

export default AdminDashboard;
