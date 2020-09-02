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

    @media (max-width: 450px) {
      flex-direction: column;
      height: 250px;
      padding: 34px 12px;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;

      @media (max-width: 768px) {
        justify-content: space-between;
        width: 80%;
      }

      div {
        width: 190px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
          width: 100px;
        }

        button {
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          width: 50%;
          cursor: default;

          svg {
            color: #fafafa;
            transition: 0.3s;
            cursor: pointer;

            &:hover {
              color: ${shade(0.3, '#fafafa')};
            }
          }
        }
      }

      span {
        width: 300px;

        @media (max-width: 768px) {
          width: 200px;
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
          width: 100%;
          height: 64px;

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
    }

    a {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      width: 600px;

      @media (max-width: 450px) {
        width: 100%;
      }

      img {
        height: 110px;
        width: 100%;
      }
    }
  }

  footer {
    background: #0f1126;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 54px;
    margin-top: 24px;

    @media (max-width: 450px) {
      padding: 24px;
      flex-direction: column;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        @media (max-width: 450px) {
          font-size: 12px;
        }
      }
    }

    svg {
      margin: 0 54px;

      @media (max-width: 450px) {
        margin: 14px;
        height: 28px;
        width: 28px;
      }
    }
  }
`;

export const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 72px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 22px;
  }

  > div {
    background: #fafafa;
    width: 60%;
    margin: 24px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 36px;
    text-align: left;

    @media (max-width: 1024px) {
      width: 90%;
      padding: 22px;
    }

    div {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      text-align: center;

      @media (max-width: 450px) {
        flex-direction: column;
      }

      svg {
        margin-right: 48px;
        color: #0f1126;

        @media (max-width: 450px) {
          margin-right: 0;
        }
      }

      p {
        font-size: 36px;
        color: #0f1126;

        @media (max-width: 450px) {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }

    p {
      color: #3d3d3d;
    }
  }

  span {
    margin: 32px 0;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 88px;

    @media (max-width: 450px) {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0;
    }

    @media (max-width: 1024px) {
      justify-content: center;
      width: 100%;
    }

    > div {
      text-align: center;

      p {
        font-size: 24px;
        color: #0f1126;

        @media (max-width: 450px) {
          font-size: 16px;
        }
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
      width: 35%;
      transition: 0.3s;

      @media (max-width: 450px) {
        height: 44px;
        width: 85%;
      }

      &:hover {
        background: ${shade(0.3, '#6ecf56')};
      }

      p {
        margin: 0 12px;
        font-weight: 600;

        @media (max-width: 450px) {
          font-size: 12px;
        }
      }
    }
  }
`;
