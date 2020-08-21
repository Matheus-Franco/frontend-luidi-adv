import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';

import Modal from '../Modal';
import Input from '../Input';

import { Form } from './styles';

interface IArticle {
  id: string;
  title: string;
  content: string;
  lawyer_name: string;
  image: string;
}

interface ICreateArticleData {
  title: string;
  content: string;
  lawyer_name: string;
  image: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddArticle: (article: Omit<IArticle, 'id'>) => void;
}

const ModalAddArticle: React.FC<IModalProps> = ({
  // eslint-disable-next-line react/prop-types
  handleAddArticle,
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateArticleData) => {
      await handleAddArticle(data);

      setIsOpen();
    },
    [setIsOpen, handleAddArticle],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h3>Adicionar Novo Artigo</h3>

        <Input name="title" placeholder="Título" />
        <Input name="content" placeholder="Conteúdo" />
        <Input name="lawyer_name" placeholder="Nome do Advogado" />

        <Input name="image" placeholder="Link da Imagem" />

        <button type="submit">Adicionar</button>
      </Form>
    </Modal>
  );
};

export default ModalAddArticle;
