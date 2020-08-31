import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #0f1126;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  header {
    width: 100%;
    height: 100%;
    padding: 0 200px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      line-height: 16px;
      font-size: 24px;
    }

    button {
      background: transparent;
      width: 70px;
      height: 40px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      font-size: 24px;

      color: #fafafa;

      svg {
        margin-left: 8px;
      }

      &:hover {
        color: ${shade(0.3, '#fafafa')};
      }
    }
  }
`;
