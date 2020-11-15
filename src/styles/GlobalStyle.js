import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html, body{
    height: 100%;
    background-color: #f1f1f1;
}

a{
    text-decoration: none;
    outline: none;
}

input, button{
    border: 0;
    outline: none;
    background: none;
    display: block;
}

button{
    cursor: pointer;
}

ul{
    list-style: none;
}


:root{
    --button-info-color: #3b74f2;
    --button-info-color-hover: #2d67e6;
    --border-color: #f1f1f1;
}
`;
