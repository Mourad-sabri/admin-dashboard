import { Rounded } from "../../../@types/types"

export interface BadgeProps {
  children?: JSX.Element // pass target element
  rounded?: Rounded | "full" // border-radius
  top?: number // margin top
  left?: number // margin left
  rigth?: number // margin right
  bottom?: number // margin bottom
  content?: string | number // badge content
}
