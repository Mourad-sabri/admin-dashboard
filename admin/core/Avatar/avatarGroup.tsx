import { Children, cloneElement, forwardRef, Ref } from "react"
import { S_AvatarGroups } from "./avatar.styled"
import { AvatarGroupProps } from "./avatar.types"

const AvatarsGroup = forwardRef((props: AvatarGroupProps, ref: Ref<HTMLDivElement>) => {
  const { children, onAvatarClick } = props
  return (
    <S_AvatarGroups {...props} ref={ref}>
      {Children.map(children, (child: any) => {
        return cloneElement(child, { onClick: onAvatarClick })
      })}
    </S_AvatarGroups>
  )
})

export default AvatarsGroup

AvatarsGroup.displayName = "AvatarGroup"
