import React, { useCallback, useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

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

  useEffect(() => {
    async function loadArticles(): Promise<void> {
      const response = await api.get('/articles/list');

      const articlesList = response.data;

      setArticles(articlesList);
    }

    loadArticles();
  }, [articles]);

  const handleSubmit = useCallback(
    async (article_id: string) => {
      await handleRemoveArticle(article_id);

      setIsOpen();
    },
    [setIsOpen, handleRemoveArticle],
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
