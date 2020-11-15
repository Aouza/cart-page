import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: #fff;
  width: 100%;
  padding: 2rem;
  text-align: center;
  border-bottom: 2px solid var(--border-color);
  position: relative;

  > a {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    color: #333;
    font-size: 1.4rem;
    color: var(--button-info-color);
    transition: all 0.4s;

    &:hover,
    &:focus {
      color: var(--button-info-color-hover);
      transform: translateY(-18px);
    }
  }

  > h1 {
    font-size: 1.6rem;
  }
`;

export const FooterCart = styled.footer`
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    > small {
      position: absolute;
      top: -1.8rem;
      left: 0;
      color: #10943c;
      font-weight: bold;
      font-size: 0.6rem;
      letter-spacing: 0.07rem;
      text-transform: uppercase;
      background: #3fbb5442;
      width: 7.5rem;
      display: flex;
      align-items: center;
      height: 1.2rem;
      justify-content: center;
      border: 1px solid #36a716;
      border-radius: 0.1rem;
    }
    > span {
      font-size: 1.6rem;
      font-weight: bold;
    }
  }
`;
