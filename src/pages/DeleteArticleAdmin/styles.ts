import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  header {
    width: 100vw;
    height: 50px;

    display: flex;
    align-items: center;
    padding: 32px;

    a {
      margin-left: 18px;
      color: #fff;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    margin-bottom: 85px;

    h3 {
      color: #fff;
      font-weight: 600;
    }

    form {
      div {
        width: 300px;
        height: 35px;
        border-radius: 5px;
        border: none;
        outline: none;
        margin: 25px 0px 15px 0px;
        padding: 0px 10px;

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
    }
  }
`;
