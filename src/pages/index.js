import Head from "next/head";
import { useRouter } from "next/router";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Header } from "../styles/pages/Home";

const Home = () => {
  const { setContentCart } = useContext(CartContext);

  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Carrinho</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Wrapper>
        <Header>
          <h1>Ir para o carrinho</h1>
        </Header>
        <div>
          <Button
            value="Abaixo de R$10"
            onClick={() => {
              setContentCart("below");
              router.push("/cart");
            }}
          />
          <Button
            value="Acima de R$10"
            onClick={() => {
              setContentCart("above");
              router.push("/cart");
            }}
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Home;
