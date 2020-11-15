import React from "react";
import { Container } from "../../styles/components/Products/Products";
import Product from "./Product";

const Products = ({ data }) => {
  console.log(data);

  return (
    <Container>
      {data &&
        data.items.map((product) => {
          return <Product data={product} />;
        })}
    </Container>
  );
};

export default Products;
