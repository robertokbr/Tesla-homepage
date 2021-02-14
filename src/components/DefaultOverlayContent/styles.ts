import styled, { css } from 'styled-components';

interface ButtonProps {
  white?: number;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.div`
  margin-top: 16.5vh;
  width: 100%;
  text-align: center;

  > h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    color: #393c41;
  }

  > h2 {
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #5c5e62;

    span {
      border-bottom: 1px solid #393c41;
      color: #000;
    }
  }
`;

export const Buttons = styled.div<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 130px;
  text-transform: uppercase;

  button {
    background: #1a1720;
    color: #fff;
    opacity: 0.8;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;
    padding: 13px 40px;

    > & + button {
      margin: 0 0 20px;
    }

    &.white {
      background: #fff;
      color: #1a1720;
      opacity: 0.65;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin: 0 0 90px;

    > button + button {
      margin: 0 0 0 10px;
    }
  }
`;
