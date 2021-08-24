import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        
        /* Custom scroll bar */
        &::-webkit-scrollbar{
            width: 0.5rem;
            
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        padding-bottom: min(10vh,5rem);
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
    font-family: "Montserrat", sans-serif;
    }
    .transition--hide{
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s linear 0.33s, opacity 0.33s linear;
    }
    .transition--show{
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
    }
`;

export default GlobalStyles;
