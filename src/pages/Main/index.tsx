import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaWhatsapp, FaRegCommentDots, FaBalanceScale } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';

import api from '../../services/api';

import {
  Container,
  AboutCompany,
  CompetenceArea,
  InterestingArticles,
} from './styles';

interface ArticleProps {
  article_id: string;
  title: string;
  content: string;
  lawyer_name: string;
  image: string;
}

const Main: React.FC = () => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    async function loadArticles(): Promise<void> {
      const response = await api.get('/articles/list');

      const articlesList = response.data;

      setArticles(articlesList);
    }

    loadArticles();
  }, [articles]);

  return (
    <Container>
      <header>
        <div>
          <button type="button">
            <FiMenu size={28} />
          </button>
        </div>

        <span>
          <p>WANDEKOEKEN </p>
          <p>ADVOCACIA</p>
        </span>
      </header>

      <span>
        <a href="https://api.whatsapp.com/send?phone={LAWYER_NUMBER}&text=Ol%C3%A1%2C%20Boa%20Tarde!">
          <FaWhatsapp size={28} />
          <p>WHATSAPP</p>
        </a>
      </span>

      <AboutCompany>
        <span>
          <FaRegCommentDots size={42} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            consectetur a erat nam at. Faucibus ornare suspendisse sed nisi
            lacus sed. Ultrices dui sapien eget mi proin. Suspendisse ultrices
            gravida dictum fusce ut placerat orci nulla. Luctus accumsan tortor
            posuere ac ut consequat. Tellus molestie nunc non blandit massa enim
            nec dui nunc. Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Odio eu feugiat pretium nibh ipsum. Consequat id porta
            nibh venenatis cras sed felis eget velit. Augue lacus viverra vitae
            congue eu consequat ac. Nunc faucibus a pellentesque sit amet
            porttitor eget dolor. Et ligula ullamcorper malesuada proin libero
            nunc. Aliquam etiam erat velit scelerisque in dictum non consectetur
            a. Eu scelerisque felis imperdiet proin fermentum leo vel orci
            porta. At augue eget arcu dictum varius duis at consectetur. Amet
            cursus sit amet dictum sit amet justo. Faucibus turpis in eu mi
            bibendum. Varius sit amet mattis vulputate enim nulla. Morbi
            tincidunt ornare massa eget egestas.
          </p>
        </span>
      </AboutCompany>

      {/*      <CompetenceArea>
        <span>
          <h3>Área de Competências</h3>
        </span>

        <div />
      </CompetenceArea>
      */}

      <InterestingArticles>
        {articles && (
          <span>
            <h3>Artigos Interessantes</h3>
          </span>
        )}

        {articles &&
          articles.map(article => (
            <div key={article.article_id}>
              <span>
                <TiDocumentText size={42} />
                <p>{article.title}</p>
              </span>
              <p>{article.content}</p>
            </div>
          ))}
      </InterestingArticles>

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

export default Main;
