import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #393d3f;
  padding: 24px;
  height: 50px;
  display: flex;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 100px;
      background: #fafafa;
      border: none;
      outline: none;
      border-radius: 5px;
      color: #393d3f;

      &:hover {
        background: ${shade(0.2, '#fafafa')};
      }
    }
  }
`;
