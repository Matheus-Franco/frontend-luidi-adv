import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  header {
    background: #0f1126;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 54px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;

        svg {
          color: #fafafa;
          transition: 0.3s;

          &:hover {
            color: ${shade(0.3, '#fafafa')};
          }
        }
      }

      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #6ecf56;
        color: #fafafa;
        padding: 24px;
        border: none;
        border-radius: 10px;

        margin: 12px 54px;
        height: 64px;
        width: 300px;
        transition: 0.3s;

        &:hover {
          background: ${shade(0.3, '#6ecf56')};
        }

        p {
          margin: 0 12px;
          font-weight: 600;
        }
      }
    }

    a {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;

      img {
        height: 110px;
      }
    }
  }

  footer {
    background: #0f1126;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 54px;
    margin-top: 24px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    svg {
      margin: 0 54px;
    }
  }
`;

export const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 72px;

  > div {
    background: #fafafa;
    width: 980px;
    margin: 24px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 36px;

    div {
      display: flex;
      align-items: center;
      margin-bottom: 24px;

      svg {
        margin-right: 48px;
        color: #0f1126;
      }

      p {
        font-size: 36px;
        color: #0f1126;
      }
    }

    p {
      color: #3d3d3d;
    }
  }

  span {
    margin: 32px 0;
    width: 980px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 88px;

    > div {
      p {
        font-size: 24px;
        color: #0f1126;
      }

      & p + p {
        font-size: 18px;
        color: #0f1126;
      }
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #6ecf56;
      color: #fafafa;
      padding: 24px;
      border: none;
      border-radius: 10px;

      margin: 12px 54px;
      height: 64px;
      width: 300px;
      transition: 0.3s;

      &:hover {
        background: ${shade(0.3, '#6ecf56')};
      }

      p {
        margin: 0 12px;
        font-weight: 600;
      }
    }
  }
`;
