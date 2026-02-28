import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
      lightBg: string;
      textDark: string;
      textLight: string;
      white: string;
    };
    container: {
      width: string;
    };
  }
}