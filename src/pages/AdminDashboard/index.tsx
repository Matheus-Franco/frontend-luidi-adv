import React, { useState, useCallback } from 'react';

import ModalAddArticle from '../../components/ModalAddArticle';
import ModalRemoveArticle from '../../components/ModalRemoveArticle';

import Header from '../../components/Header';

import api from '../../services/api';

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
  const [articles, setArticles] = useState<IArticle[]>([]);

  const handleAddArticle = useCallback(
    async (article: Omit<IArticle, 'id'>) => {
      const newArticle = await api.post('/admin/create-article', article);

      setArticles([...articles, newArticle]);
    },
    [articles],
  );

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
      <Header />
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
