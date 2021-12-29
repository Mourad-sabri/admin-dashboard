import { CSSProperties } from "react"
import { Props } from "react-bootstrap-icons"
import { Intent, Rounded, Size } from "../../../@types/types"

export interface TagProps {
  intent?: Intent // apply intent color
  icon?: Props | string
  title?: string
  size?: Size
  rounded?: Rounded // border-radius
  onRemoveClick?: () => void // function to call when the user click remove btn ---note--- required allowRemove to be true
  allowRemove?: boolean /// show Remove btn
  style?: CSSProperties
  className?: string
}
