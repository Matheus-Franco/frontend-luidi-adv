import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #fafafa;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    background: #0f1126;
    height: 110px;
    width: 100%;
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

          padding: 24px;
          border: none;
          border-radius: 10px;
          width: 100%;
          height: 64px;
          color: #fafafa;
          transition: 0.3s;

          &:hover {
            background: ${shade(0.3, '#6ecf56')};
          }

          @media (max-width: 360px) {
            height: 50px;
          }

          p {
            margin: 0 12px;
            font-weight: 600;
            color: #fafafa;
          }
        }
      }
    }

    button {
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

export const AboutCompany = styled.div`
  background: #0f1126;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 65%;
    text-align: center;

    @media (max-width: 450px) {
      width: 85%;
    }

    svg {
      margin: 48px 0 32px 0;
      color: #fafafa;

      @media (max-width: 450px) {
        margin: 0 0 24px 0;
      }
    }

    p {
      width: 100%;
      display: flex;
      align-items: center;
      color: #fafafa;
      margin-bottom: 64px;
    }
  }
`;

export const CompetenceArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 350px;

  @media (max-width: 450px) {
    height: 450px;

    justify-content: flex-start;
    align-items: flex-start;
  }

  > div {
    width: 100%;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 450px) {
      height: 170px;
    }

    h3 {
      font-size: 36px;
      color: #0f1126;
      font-weight: 600;
      margin: 32px;

      @media (max-width: 450px) {
        margin: 12px;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 200px;

    @media (max-width: 450px) {
      height: 300px;
      flex-direction: column;
    }

    div {
      height: 100%;
      width: 18%;
      background: #0f1126;
      margin: 0 18px;
      border-radius: 15px;
      border: 2px solid #0f1126;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 0.3s;
      overflow: hidden;

      @media (max-width: 450px) {
        width: 70%;
        height: 40%;
        margin: 12px 0;
        justify-content: center;
      }

      p {
        font-size: 32px;
        transition: 0.3s;

        @media (max-width: 769px) {
          font-size: 16px;
        }

        @media (max-width: 1024px) {
          font-size: 24px;
        }
      }

      &:hover {
        background: #fafafa;

        p {
          color: #0f1126;
        }
      }
    }
  }
`;

export const InterestingArticles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  > span {
    width: 100%;
    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
      font-size: 36px;
      color: #0f1126;
      font-weight: 600;
      margin: 32px;
    }
  }

  > div {
    background: #fff;
    width: 60%;
    height: 500px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 36px;

    & + div {
      margin: 24px;
    }

    @media (max-width: 450px) {
      height: 250px;
      width: 80%;
      padding: 16px;
    }

    span {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      width: 95%;
      overflow: hidden;

      @media (max-width: 450px) {
        margin-bottom: 12px;
        width: 100%;
      }

      svg {
        margin-right: 24px;
        color: #0f1126;

        @media (max-width: 450px) {
          display: none;
        }
      }

      button {
        background: transparent;
        border: none;
        width: 100%;
        height: 100%;

        p {
          font-size: 36px;
          color: #0f1126;

          @media (max-width: 3450px) {
            font-size: 24px;
          }
        }
      }
    }

    > div {
      height: 290px;
      width: 95%;
      overflow: hidden;
      opacity: 0.5;
      text-align: center;

      @media (max-width: 450px) {
        display: none;
      }

      p {
        color: #3d3d3d;
      }
    }

    > button {
      display: flex;
      margin-top: 18px;
      color: #0f1126;
      background: transparent;
      border: none;

      @media (max-width: 450px) {
        margin-top: 10px;
      }

      p {
        font-weight: 600;
        font-size: 18px;

        @media (max-width: 450px) {
          font-size: 12px;
        }
      }
    }
  }
`;
