import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-height: 500px;
  padding: 24px;
  overflow: scroll;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    background: #393d3f;
    border-radius: 10px;

    margin-bottom: 12px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      transition: 0.3s;
      border: none;

      svg {
        color: #fff;

        &:hover {
          color: ${shade(0.3, '#fff')};
        }
      }
    }
  }
`;
