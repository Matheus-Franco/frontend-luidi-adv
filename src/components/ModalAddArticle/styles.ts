import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { shade } from 'polished';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  > div {
    height: 55px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 0px 10px;
    font-size: 16px;
    background: #c5c5c5;
    margin-bottom: 18px;
  }

  h3 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
    color: #393d3f;
  }

  button {
    background: #393d3f;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    height: 55px;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.3s;

    &:hover {
      background: ${shade(0.2, '#393D3F')};
    }
  }
`;
