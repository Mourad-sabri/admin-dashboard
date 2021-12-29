import { Intent, Rounded, Size, Variant } from "../../../@types/types"

export interface ButtonsGroupProps {
  children?: JSX.Element | JSX.Element[] /// pass button list
  rounded?: Rounded // border-radius
  intent?: Intent /// apply intent colors to all buttons --- note--- in you provide this prop it will override all intent props passed to the button
  variant?: Variant | "text" // apply variant to the buttons
  size?: Size
}
