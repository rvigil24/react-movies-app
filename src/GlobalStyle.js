import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 4rem;
        --font: 2rem;
        --fontMed: 1.5rem;
        --fontSmall: 1.5rem;
    }
    *{
        margin:0;
        padding:0;
        outline:none;
        font-family: 'Abel', sans-serif;
        box-sizing: inherit;
    }
    html{
        font-size: 62.5%;
    }
    body{
        box-sizing: border-box;

        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }
        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }
        p{
            font-size: 1rem;
            color: var(--white);
        }
    }
`;
