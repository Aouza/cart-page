import React from "react";

import { Container } from "../styles/components/Button";

const Button = ({ value, onClick }) => {
  return <Container onClick={onClick}>{value}</Container>;
};

export default Button;
