import React, { useCallback } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { useArticle } from '../../hooks/articles';

import Modal from '../Modal';

import { Container } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleRemoveArticle: (article_id: string) => void;
}

const ModalRemoveArticle: React.FC<IModalProps> = ({
  // eslint-disable-next-line react/prop-types
  handleRemoveArticle,
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
}) => {
  const { articles } = useArticle();

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

  const handleSubmit = useCallback(
    async (article_id: string) => {
      try {
        handleRemoveArticle(article_id);

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
