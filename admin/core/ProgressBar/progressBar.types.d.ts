import { Intent } from "../../../@types/types"

export interface ProgressBarProps {
  intent?: Intent // apply intent colors
  percent?: number /// percent to display default 0
  color?: string /// progress bar color
  animation?: boolean // apply animation
  showCounUp?: boolean // apply  count animation
}
