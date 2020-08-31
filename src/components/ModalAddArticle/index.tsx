import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Modal from '../Modal';
import Input from '../Input';

import { Form } from './styles';

interface IArticle {
  id: string;
  title: string;
  content: string;
  lawyer_name: string;
  phone_number: string;
}

interface ICreateArticleData {
  title: string;
  content: string;
  lawyer_name: string;
  phone_number: string;
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
      try {
        const schema = Yup.object().shape({
          title: Yup.string().required('Título obrigatório.'),
          content: Yup.string().required('Conteúdo obrigatório'),
          lawyer_name: Yup.string().required('Nome do advogado é obrigatório.'),
          phone_number: Yup.string().required(
            'Número para contato é obrigatório.',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await handleAddArticle(data);

        setIsOpen();
      } catch (err) {
        console.log('Error');
      }
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

        <Input name="phone_number" placeholder="Número do Advogado" />

        <button type="submit">Adicionar</button>
      </Form>
    </Modal>
  );
};

export default ModalAddArticle;
