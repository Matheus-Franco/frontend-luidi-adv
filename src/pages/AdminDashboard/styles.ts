import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;

  > div {
    background: #393d3f;
    width: 1200px;
    height: 500px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);

    button {
      background: #fafafa;
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
        background: #6ecf56;
        margin-top: 5px;

        p {
          color: #fafafa;
        }
      }

      p {
        font-weight: 600;
        font-size: 18px;
        color: #434a52;
      }
    }
  }
`;
