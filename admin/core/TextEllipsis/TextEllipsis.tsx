import { useEffect, useState } from "react"
import React, { Fragment, MutableRefObject, useRef } from "react"
import Tooltip from "../Tooltip/Tooltip"
import { TextEllipsisProps } from "./textEllipsis.types"

const TextEllipsis = (props: TextEllipsisProps) => {
  const { length } = props

  const DivRef = useRef() as MutableRefObject<HTMLDivElement>

  // console.log(props.children.split("").slice(0, props.length).join(""))

  const [containerWidth, setContainerWidth] = useState<number>()
  const [textWidth, setTextWidth] = useState<any>()

  function calctextWidth(text: any, font?: any): number {
    var canvas = document.createElement("canvas")

    var context = canvas.getContext("2d")

    context!.font = font || getComputedStyle(document.body).font

    return context!.measureText(text).width
  }

  useEffect(() => {
    if (DivRef && DivRef.current) {
      setContainerWidth(DivRef.current.offsetWidth)
    }

    setTextWidth(parseInt(calctextWidth(props.children).toString()) + 11)
  })

  return (
    <Fragment>
      {typeof props.children === "string" ? (
        <Tooltip content={<div style={{ padding: 5 }}>{props.children}</div>} disabled={textWidth! <= containerWidth! ? true : false}>
          <p
            {...props}
            ref={DivRef}
            style={length ? props.style : { ...props.style, whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}
          >
            {props.length ? <> {props.children.split("").slice(0, length).join("")}... </> : props.children}
          </p>
        </Tooltip>
      ) : (
        props.children
      )}
    </Fragment>
  )
}

export default TextEllipsis
