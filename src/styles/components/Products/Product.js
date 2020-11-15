import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  gap: 2rem;
  border-radius: 1rem;
  padding: 0 2rem;
  position: relative;

  &::before {
    content: "";
    background-color: rgb(192 227 255 / 36%);
    height: 80px;
    width: 80px;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    top: 2rem;
    left: 2.8rem;
    box-shadow: 9px 7px 13px 0px rgb(6 6 6 / 8%);
  }

  & + li {
    margin-top: 1rem;
  }
`;

export const ImageContainer = styled.div`
  max-width: 25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  > img {
    width: 7rem;
    position: relative;
    display: block;
  }

  > h2 {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.05rem;
    color: #333;
    text-transform: uppercase;
  }
`;

export const Price = styled.div`
  > span {
    font-size: 1rem;
    color: #ccc;
  }

  > p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
