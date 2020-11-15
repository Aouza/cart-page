import styled from "styled-components";

export const Container = styled.div`
  max-width: 40rem;
  width: 100%;
  height: fit-content;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 5%);
  overflow: hidden;

  > div,
  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;
    background-color: #fff;
    border-top: 2px solid var(--border-color);
  }
`;
