import { forwardRef, Ref } from "react"
import { S_Badge } from "./badge.styled"
import { BadgeProps } from "./badge.types"

const Badge = forwardRef((props: BadgeProps, ref: Ref<HTMLDivElement>) => {
  const { children, content } = props

  return (
    <S_Badge rounded="full" top={-10} left={-3} {...props} ref={ref}>
      <div className="badgeStyled__badge"> {content} </div>
      {children}
    </S_Badge>
  )
})

export default Badge

Badge.displayName = "Badge"
