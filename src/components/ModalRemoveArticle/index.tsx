import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';

import Modal from '../Modal';
import Input from '../Input';

import { Form } from './styles';

interface IDeleteArticleProps {
  article_id: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleRemoveArticle: (data: IDeleteArticleProps) => void;
}

const ModalRemoveArticle: React.FC<IModalProps> = ({
  // eslint-disable-next-line react/prop-types
  handleRemoveArticle,
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IDeleteArticleProps) => {
      await handleRemoveArticle(data);

      setIsOpen();
    },
    [setIsOpen, handleRemoveArticle],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h3>Remover Artigo</h3>

        <Input name="article_id" placeholder="ID do Artigo" />

        <button type="submit">Remover</button>
      </Form>
    </Modal>
  );
};

export default ModalRemoveArticle;
