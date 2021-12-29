import "styled-components"
import { BaseTheme } from "../styles/BaseTheme"

type BaseThemeProps = typeof BaseTheme

declare module "styled-components" {
  export interface DefaultTheme extends BaseThemeProps {}
}
