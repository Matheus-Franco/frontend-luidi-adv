import React from 'react';
import { FiMenu } from 'react-icons/fi';
import {
  FaWhatsapp,
  FaRegCommentDots,
  FaPencilAlt,
  FaBalanceScale,
} from 'react-icons/fa';

import {
  Container,
  AboutCompany,
  CompetenceArea,
  InterestingArticles,
} from './styles';

const Main: React.FC = () => {
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
        <button type="button">
          <FaWhatsapp size={28} />
          <p>WHATSAPP</p>
        </button>
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

      <CompetenceArea>
        <span>
          <h3>Área de Competências</h3>
        </span>
      </CompetenceArea>

      <InterestingArticles>
        <span>
          <h3>Artigos Interessantes</h3>
        </span>

        <div>
          <span>
            <FaPencilAlt size={42} />
            <p>Direito Tributário e as responsabilidades do advogado</p>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            consectetur a erat nam at. Faucibus ornare suspendisse sed nisi
            lacus sed. Ultrices dui sapien eget mi proin. Suspendisse ultrices
            gravida dictum fusce ut placerat orci nulla. Luctus accumsan tortor
            posuere ac ut consequat. Tellus molestie nunc non blandit massa enim
            nec dui nunc. Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Odio eu feugiat pretium nibh ipsum. Consequat id porta
            nibh venenatis cras sed felis eget velit.
          </p>
        </div>

        <div>
          <span>
            <FaPencilAlt size={42} />
            <p>Direito Tributário e as responsabilidades do advogado</p>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            consectetur a erat nam at. Faucibus ornare suspendisse sed nisi
            lacus sed. Ultrices dui sapien eget mi proin. Suspendisse ultrices
            gravida dictum fusce ut placerat orci nulla. Luctus accumsan tortor
            posuere ac ut consequat. Tellus molestie nunc non blandit massa enim
            nec dui nunc. Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Odio eu feugiat pretium nibh ipsum. Consequat id porta
            nibh venenatis cras sed felis eget velit.
          </p>
        </div>

        <div>
          <span>
            <FaPencilAlt size={42} />
            <p>Direito Tributário e as responsabilidades do advogado</p>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            consectetur a erat nam at. Faucibus ornare suspendisse sed nisi
            lacus sed. Ultrices dui sapien eget mi proin. Suspendisse ultrices
            gravida dictum fusce ut placerat orci nulla. Luctus accumsan tortor
            posuere ac ut consequat. Tellus molestie nunc non blandit massa enim
            nec dui nunc. Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Odio eu feugiat pretium nibh ipsum. Consequat id porta
            nibh venenatis cras sed felis eget velit.
          </p>
        </div>
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
