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
        @font-face {
            font-family: 'Ubuntu', sans-serif;
            src: url("../../Unbuntu-Regular.ttf") format("ttf")

            /* font-family: 'Ubuntu', sans-serif;
            src: url("../../Unbuntu-Medium.ttf") format("ttf") */
        }

        font-family: 'Ubuntu', sans-serif;
        width: 100%;
    }
    h1{
        color: #3F3D56;
        font-weight:500;
    }
    
    h2{
        font-weight: lighter;
        color: #3F3D56;
    }
    h3{
        color: #3F3D56;
    }
    h4{
        color: #3F3D56;
        padding: 1.5rem 0rem;
    }
    p{
        color: #3F3D56;
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
