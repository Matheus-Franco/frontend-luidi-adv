import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    background: #fafafa;
    width: 900px;
    height: 500px;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);

    button {
      background: #393d3f;
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
        background: #fafafa;
        margin-top: 5px;
        border: 3px solid #3b3d42;

        p {
          color: #3b3d42;
        }
      }

      p {
        font-weight: 600;
        font-size: 18px;
        color: #fff;
      }
    }
  }
`;
