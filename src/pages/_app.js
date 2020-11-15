import GlobalStyle from "../styles/GlobalStyle";
import { CartProvider } from "../context/CartContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>

      <GlobalStyle />
    </>
  );
};

export default MyApp;
