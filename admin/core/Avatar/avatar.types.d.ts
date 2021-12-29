import { Size } from "../../../@types/types"

export interface AvatarProps {
  name?: string // pass the name to render in the avatar if the img not provided
  src?: string // pass img src to display in the avatar
  color?: string
  backgroundColor?: string
  onClick?: () => void // pass function to call when the avatar clicked
  size?: Size // pass the avatar size
}

export interface AvatarGroupProps {
  interactive?: boolean /// make the avatars interactive when the user hover over the avatar
  children?: JSX.Element | JSX.Element[] /// pass avatar list
  onAvatarClick?: () => void // pass function to call when the avatar clicked
}
