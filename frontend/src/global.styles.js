import { createGlobalStyle } from "styled-components";
import bg from "./assets/bg.svg";

export const Global = createGlobalStyle`
*{
    padding: 0px;
    margin:0px;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;

  
}

body{
    background-position:center center;
    object-fit:cover;
    background-size:cover;
    background-image: url(${bg});  
   
  
}


`;
