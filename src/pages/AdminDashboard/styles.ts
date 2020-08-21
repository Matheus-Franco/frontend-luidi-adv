import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    background: #fafafa;
    width: 700px;
    height: 400px;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    button {
      background: #6f9fd7;
      height: 60%;
      width: 30%;
      margin: 24px;
      border-radius: 15px;
      border: none;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 18px;
      transition: 0.3s;

      &:hover {
        background: ${shade(0.2, '#6F9FD7')};
        margin-top: 5px;
      }

      p {
        font-weight: 600;
        font-size: 18px;
        color: #fff;
      }
    }
  }
`;
