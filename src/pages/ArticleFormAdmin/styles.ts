import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  h3 {
    margin-bottom: 55px;
  }

  a {
    color: #fff;
    margin-top: 40px;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
