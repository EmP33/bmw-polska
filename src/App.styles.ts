import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --color-blue: #3369D3;
        --color-black: #000000;
        --color-white: #FFFFFF;

        --color-gray-1: #4E4E4E;
        --color-gray-2: #6D6D6D;
        --color-gray-3: #707070;
        --color-gray-4: #A9A7A8;
        --color-gray-5: #4E4E4E;
        --color-gray-6: #BEBEBE;
        --color-gray-7: #E6E6E6;

        --font-primary:  'Open Sans', sans-serif;
        --font-secondary: 'Roboto', sans-serif;
        --font-heading: 'Cairo', sans-serif;

    }

    body {
        font-family: 'Open Sans', sans-serif;
        background: var(--color-white);
        scroll-behavior: smooth;
    }

    html {
        scroll-behavior: smooth;
    }
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
       
    }
`;

export default GlobalStyle;
