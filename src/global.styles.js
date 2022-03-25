import { createGlobalStyle } from "styled-components";
import bg from "./assets/bg.svg";

export const Global = createGlobalStyle`
*{
    padding: 0px;
    margin:0px;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    overflow-x: none;

  
}

body{
    background-position:center center;
    object-fit:cover;
    background-size:cover;
    background-image: url(${bg});
    background-repeat:repeat;  
    padding:2rem 3rem;
    width:100vw;
    height:100vh;
    overflow-x: hidden;
  
}


`;
