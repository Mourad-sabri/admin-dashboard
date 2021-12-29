import React, { Children, Fragment } from "react"
import { ThreeDotsVertical } from "react-bootstrap-icons"
import Button from "../../core/Buttons/Button"
import Tooltip from "../../core/Tooltip/Tooltip"
import { useMediaQuery } from "../../hooks/useMediaQuery/useMediaQuery"

interface ButtonListProps {
  children?: JSX.Element | JSX.Element[]
}

export const ButtonsList = (props: ButtonListProps) => {
  const { children } = props

  const { sm } = useMediaQuery({
    sm: 1100,
  })

  const showMoreButton = (_childrens?: JSX.Element[] | JSX.Element) => {
    return (
      <Tooltip
        content={<div style={{ display: "flex" }}> {_childrens} </div>}
        placement="bottom-end"
        interactive
        trigger="click
      "
      >
        <Button icon={<ThreeDotsVertical />} size="sm" />
      </Tooltip>
    )
  }

  const renderChildren = !sm
    ? showMoreButton(children)
    : Array.isArray(children) && children.length > 7
    ? [...children.slice(0, 7), showMoreButton(children.slice(7))]
    : children

  return (
    <div className="layoutStyled__buttonsList">
      {Children.map(renderChildren, (child) => {
        return child
      })}
    </div>
  )
}
