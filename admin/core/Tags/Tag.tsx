import React, { forwardRef, Ref } from "react"
import { Mic, X } from "react-bootstrap-icons"
import { S_Tag } from "./tag.styled"
import { TagProps } from "./tag.type"

const Tag = forwardRef((props: TagProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { onRemoveClick, allowRemove, title, icon } = props
  return (
    <S_Tag rounded="sm" {...props} ref={ref}>
      {icon && <span className="tagStyled__icon">{icon}</span>}
      {title && <span> {title} </span>}
      {allowRemove && (
        <span className="tagStyled__removeIcon" onClick={onRemoveClick}>
          <X />
        </span>
      )}
    </S_Tag>
  )
})

Tag.displayName = "Tag"

export default Tag
