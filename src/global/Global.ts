import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-golden: #AA8232;

    --gray-2:#E1DCD5;
    --gray-input:rgba(225, 220, 213, 0.5);
    --gray-input-2:rgba(225, 220, 213, 0);
    --gray-1:#333333;
    --gray-0:#FDFDFD;
   
    --font-main: "Open Sans";
    --font-secondary:"Oswald";
    --font-banner:"Playfair Display";
}

*{
  margin: 0px;
	padding: 0px;
	border: 0px;
	font-size: 100%;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
figure{
    margin: 0px;
    padding: 0px;
    border: 0;
}

button{
  cursor: pointer;
}

a{
  cursor: pointer;
}
ul,li{
 list-style: none;
}`;
