import styled from "styled-components";

export const Container = styled.a`
  padding: 1rem 2rem;
  background-color: var(--button-info-color);
  border-radius: 0.2rem;
  box-shadow: 3px 10px 20px -5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  transition: background-color 0.4s;

  &:hover,
  &:focus {
    background-color: var(--button-info-color-hover);
  }
`;
