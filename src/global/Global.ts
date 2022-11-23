import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --color-white: #FFFFFF;
    --color-black: #000000;

    --gray-2:#E1DCD5;
    --gray-1:#333333;
    --gray-0:#FDFDFD;

    --font-main: "Open Sans";
    --font-secondary:"Oswald"
    --font-banner:"Playfair Display"
}

*{
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
    box-sizing: border-box;
}

body{
    overflow-x: hidden;
    background-color: #121214;
}
body::-webkit-scrollbar {
    border: none;
    width: 8px;
}
body::-webkit-scrollbar-thumb {
    background-color: var(--gray-2);
    border-radius: 5px;
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
