import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { TiDocumentText } from 'react-icons/ti';
import { FaWhatsapp, FaBalanceScale } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import { Container, Article } from './styles';

interface IArticle {
  id: string;
  title: string;
  content: string;
  lawyer_name: string;
  phone_number: string;
}

const ArticleDetails: React.FC = () => {
  const { id } = useParams();

  const [article, setArticle] = useState<IArticle>({} as IArticle);

  useEffect(() => {
    async function loadArticle(): Promise<void> {
      const response = await api.get(`/articles/list/${id}`);

      const articleSelected = response.data;

      setArticle(articleSelected);
    }

    loadArticle();
  }, [id]);

  return (
    <Container>
      <header>
        <div>
          <button type="button">
            <FiMenu size={28} />
          </button>

          <span>
            <a href="https://api.whatsapp.com/send?phone={LAWYER_NUMBER}&text=Ol%C3%A1%2C%20Boa%20Tarde!">
              <FaWhatsapp size={28} />
              <p>WHATSAPP</p>
            </a>
          </span>
        </div>

        <span>
          <p>WANDEKOEKEN </p>
          <p>ADVOCACIA</p>
        </span>
      </header>

      {article && (
        <Article>
          <div>
            <div>
              <TiDocumentText size={48} />

              <p>{article.title}</p>
            </div>
            <p>{article.content}</p>
          </div>

          <span>
            <p>{article.lawyer_name}</p>

            <a
              href={`https://api.whatsapp.com/send?phone=${article.phone_number}&text=Ol%C3%A1%2C%20Boa%20Tarde!`}
            >
              <FaWhatsapp size={28} />
              <p>WHATSAPP</p>
            </a>
          </span>
        </Article>
      )}
      <footer>
        <span>
          <p>©2020 Wandekoeken ADV. </p>
          <p>Tel: +55 11 4118-2901</p>
        </span>
        <FaBalanceScale size={48} />
        <span>
          <p>Av. Jerônimo Monteiro, 308 </p>
          <p>Jaburuna, Vila Velha, Brazil</p>
        </span>
      </footer>
    </Container>
  );
};

export default ArticleDetails;
