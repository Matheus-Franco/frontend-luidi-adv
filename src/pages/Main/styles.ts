import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #f6f6f6;

  header {
    background: #5f72a2;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 54px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;

      svg {
        color: #f6f6f6;
        transition: 0.3s;

        &:hover {
          color: ${shade(0.3, '#fff')};
        }
      }
    }

    span {
      background: #4c4b4b;
      height: 182px;
      width: 305px;
      border-radius: 15px;
      transform: translateY(35px);

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 24px;

      p {
        font-size: 36px;
        font-weight: 600;
      }
    }
  }

  span {
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #6ecf56;
      color: #fff;
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

  footer {
    background: #5f72a2;

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
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    svg {
      margin: 54px;
      color: #8b9cb0;
    }

    p {
      width: 1000px;
      display: flex;
      align-items: center;
      color: #36456c;
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
      color: #8b9cb0;
      font-weight: 600;
    }
  }

  div {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    background: #fff;
    height: 400px;
    width: 980px;
    margin: 24px;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    padding: 36px;
    cursor: pointer;
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
      color: #8b9cb0;
      font-weight: 600;
    }
  }

  div {
    background: #fff;
    width: 980px;
    margin: 24px;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    padding: 36px;
    cursor: pointer;

    span {
      display: flex;
      align-items: center;
      margin-bottom: 24px;

      svg {
        margin-right: 24px;
        color: #5f72a2;
      }

      p {
        font-size: 36px;
        color: #5f72a2;

        &:hover {
          color: ${shade(0.3, '#5f72a2')};
        }
      }
    }

    p {
      color: #36456c;
    }
  }
`;
