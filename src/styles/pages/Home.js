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

  > h1 {
    font-size: 1.6rem;
  }
`;
