import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {

    @font-face {
      font-family: Roboto;
      src: url(/Roboto-Regular.ttf) format('truetype');
      font-display: fallback;
    }
    
    @font-face {
      font-family: RobotoMid;
      src: url(/Roboto-Medium.ttf) format('truetype');
      font-display: fallback;
    }
    
    @font-face {
      font-family: RobotoBold;
      src: url(/Roboto-Bold.ttf) format('truetype');
      font-display: fallback;
    }

    @font-face {
      font-family: Brand;
      src: url(/Comforter-Regular.ttf) format('truetype');
      font-display: fallback;
    }

    @font-face {
      font-family: Error;
      src: url(/SedgwickAve-Regular.ttf) format('truetype');
      font-display: fallback;
    }
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;