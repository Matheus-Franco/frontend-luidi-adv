import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  h3 {
    color: #fff;
    font-weight: 600;
  }

  input {
    width: 300px;
    height: 35px;
    border-radius: 5px;
    border: none;
    outline: none;
    margin: 25px 0px 15px 0px;
    padding: 0px 10px;

    color: #000;
    font-size: 16px;
  }

  button {
    background: #c53030;
    border-radius: 5px;
    color: #000;
    font-weight: 600;
    width: 300px;
    height: 35px;
    outline: none;
    padding: 10px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    &:hover {
      background: ${shade(0.2, '#c53030')};
    }
  }
`;
