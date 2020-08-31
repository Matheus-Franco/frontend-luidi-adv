import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 85vh;

  button {
    background: #0f1126;
    height: 80%;
    width: 40%;
    margin: 24px;
    border-radius: 15px;
    border: none;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
    transition: 0.3s;

    p {
      font-weight: 600;
      font-size: 28px;
      color: #fafafa;
    }

    &:hover {
      background: #fafafa;
      margin-top: 5px;
      border: 2px solid #0f1126;

      p {
        color: #0f1126;
      }
    }
  }
`;
