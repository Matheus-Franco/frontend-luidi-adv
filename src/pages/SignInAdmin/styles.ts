import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #0f1126;

  h3 {
    color: #fafafa;
    font-weight: 600;
    margin-bottom: 50px;
  }

  form {
    > div {
      background: #fafafa;
      height: 300px;
      width: 500px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 15px;

      > div {
        width: 80%;
        height: 55px;
        border-radius: 5px;
        border: none;
        outline: none;
        padding: 0px 10px;
        font-size: 16px;
        background: #c5c5c5;

        margin: 10px 0px;
      }
    }
  }

  button {
    background: #6ecf56;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    width: 80%;
    height: 55px;
    border-radius: 5px;
    border: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    &:hover {
      background: ${shade(0.2, '#6ECF56')};
    }
  }
`;
