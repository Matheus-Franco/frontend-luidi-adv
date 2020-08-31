import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #fafafa;

  header {
    background: #0f1126;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 54px;

    div {
    }
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

    button {
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

export const AboutCompany = styled.div`
  background: #0f1126;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    svg {
      margin: 48px 0 32px 0;
      color: #fafafa;
    }

    p {
      width: 1000px;
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

  > span {
    h3 {
      font-size: 36px;
      color: #0f1126;
      font-weight: 600;
      margin: 32px;
    }
  }

  span {
    display: flex;

    div {
      height: 190px;
      width: 300px;
      background: #0f1126;
      margin: 0 18px;
      border-radius: 15px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 32px;
      transition: 0.3s;

      &:hover {
        background: #fafafa;
        color: #0f1126;
        border: 2px solid #0f1126;
      }
    }
  }
`;

export const InterestingArticles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > span {
    margin-top: 64px;

    h3 {
      font-size: 36px;
      color: #0f1126;
      font-weight: 600;
    }
  }

  > div {
    background: #fff;
    width: 980px;
    margin: 24px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 36px;

    span {
      display: flex;
      align-items: center;
      margin-bottom: 24px;

      svg {
        margin-right: 24px;
        color: #0f1126;
      }

      button {
        background: transparent;
        border: none;

        p {
          font-size: 36px;
          color: #0f1126;
        }
      }
    }

    > div {
      height: 290px;
      overflow: hidden;
      opacity: 0.5;

      p {
        color: #3d3d3d;
      }
    }

    > button {
      display: flex;
      margin: 16px 0 0 750px;
      color: #0f1126;
      background: transparent;
      border: none;
      font-weight: 600;
      font-size: 18px;
    }
  }
`;
