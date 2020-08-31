import React, { useState, useEffect, useCallback } from 'react';
import { TiDocumentText } from 'react-icons/ti';
import { FaWhatsapp, FaBalanceScale, FaHome } from 'react-icons/fa';
import { useParams, Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/logoBlue.png';

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
  const history = useHistory();

  const [article, setArticle] = useState<IArticle>({} as IArticle);

  const handleNavigate = useCallback(() => {
    history.push('/');
  }, [history]);

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
          <button type="button" onClick={handleNavigate}>
            <FaHome size={28} />
          </button>

          <span>
            {article && (
              <a
                href={`https://api.whatsapp.com/send?phone=${article.phone_number}&text=Ol%C3%A1%2C%20Boa%20Tarde!`}
              >
                <FaWhatsapp size={28} />
                <p>WHATSAPP</p>
              </a>
            )}
          </span>
        </div>

        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
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
            <div>
              <p>Advogado Responsável:</p>
              <p>{article.lawyer_name}</p>
            </div>

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
          <p>Wandekoeken Advogados</p>
          <p>& Associados.</p>
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
