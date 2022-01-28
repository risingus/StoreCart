import "styled-components";

interface MyTheme {
  theme: string,
  colors: {
    header: string,
    background_primary: string,
    background_secondary: string,
    text: string,
    text_detail: string,
    title: string,
    main: string,
    main_light: string,
    success: string
  },
  fonts: {
    regular: string,
    mid: string,
    bold: string,
    brand: string,
    error: string
  }
}


declare module "styled-components" {

  interface  DefaultTheme extends MyTheme {}
}