import { createGlobalStyle } from 'styled-components';
import Colors from './colors';

export default createGlobalStyle`
/* Reset CSS: */
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }
  html {
    font-size: 62.5%;
  }

  body {
    background: #F6F7FB;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;


  }
  body, input, textarea {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }
  a, button {
    outline: none;
  }

  /* Font Sizes */

  h1 {
    font-size: 4.2rem;
    color: ${Colors.Blue};
    font-weight: bold;
    line-height: 53px;
  }

  h2 {
    font-size: 2.3rem;
    color: ${Colors.Blue};
    font-weight: bold;
    line-height: 29px;
  }

  p {
    font-size: 1.8rem;
    line-height: 23px;
  }

  small {
    font-size: 1.2rem;
    line-height: 15px;
  }



`;
