import React, { useCallback } from 'react';
import {
  FaWhatsapp,
  FaRegCommentDots,
  FaBalanceScale,
  FaHome,
} from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import { useHistory } from 'react-router-dom';

import { useArticle } from '../../hooks/articles';

import logo from '../../assets/logoBlue.png';

import {
  Container,
  AboutCompany,
  CompetenceArea,
  InterestingArticles,
} from './styles';

const Main: React.FC = () => {
  const history = useHistory();

  const { handleNavigateToDetail, articles } = useArticle();

  const handleNavigate = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <header>
        <div>
          <div>
            <button type="button" onClick={handleNavigate}>
              <FaHome size={28} />
            </button>
          </div>

          <span>
            <a href="https://api.whatsapp.com/send?phone=5527997430836&text=Ol%C3%A1%2C%20Boa%20Tarde!">
              <FaWhatsapp size={28} />
              <p>WHATSAPP</p>
            </a>
          </span>
        </div>

        <button type="button">
          <img src={logo} alt="logo" />
        </button>
      </header>

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

      <CompetenceArea>
        <div>
          <h3>Área de Competências</h3>
        </div>

        <span>
          <div>
            <p>Imobiliário</p>
          </div>
          <div>
            <p>Empresarial</p>
          </div>
          <div>
            <p>Tributário</p>
          </div>
          <div>
            <p>Criminal</p>
          </div>
        </span>
      </CompetenceArea>

      <InterestingArticles>
        <span>
          <h3>Artigos Interessantes</h3>
        </span>

        {articles &&
          articles.map(article => (
            <div key={article.id}>
              <span>
                <TiDocumentText size={42} />
                <button
                  onClick={() => handleNavigateToDetail(article.id)}
                  type="button"
                >
                  <p>{article.title}</p>
                </button>
              </span>
              <div>
                <p>{article.content}</p>
              </div>

              <button
                type="button"
                onClick={() => handleNavigateToDetail(article.id)}
              >
                <p>Continuar Leitura</p>
              </button>
            </div>
          ))}
      </InterestingArticles>

      <footer>
        <span>
          <p>Wandekoeken Advogados</p>
          <p>& Associados.</p>
          <p>Tel: +55 27 99743-0836</p>
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
