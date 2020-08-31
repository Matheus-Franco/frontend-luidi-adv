import React, { useCallback, useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Modal from '../Modal';

import api from '../../services/api';

import { Container } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleRemoveArticle: (article_id: string) => void;
}

interface IArticle {
  id: string;
  title: string;
}

const ModalRemoveArticle: React.FC<IModalProps> = ({
  // eslint-disable-next-line react/prop-types
  handleRemoveArticle,
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
}) => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  const notifySucess = useCallback((): void => {
    toast.success('Artigo removido com sucesso.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  const notifyError = useCallback((): void => {
    toast.error('Algo de errado aconteceu.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  useEffect(() => {
    async function loadArticles(): Promise<void> {
      const response = await api.get('/articles/list');

      const articlesList = response.data;

      setArticles(articlesList);
    }

    loadArticles();
  }, []);

  const handleSubmit = useCallback(
    async (article_id: string) => {
      try {
        await handleRemoveArticle(article_id);

        setIsOpen();

        notifySucess();
      } catch (err) {
        notifyError();
      }
    },
    [setIsOpen, handleRemoveArticle, notifyError, notifySucess],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        {articles &&
          articles.map(article => (
            <div key={article.id}>
              <p>{article.title}</p>

              <button type="button" onClick={() => handleSubmit(article.id)}>
                <FaRegTrashAlt />
              </button>
            </div>
          ))}
      </Container>
    </Modal>
  );
};

export default ModalRemoveArticle;
