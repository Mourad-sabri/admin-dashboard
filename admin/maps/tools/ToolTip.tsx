import React from "react"
import ReactTooltip from "react-tooltip"
import { ToolTipMapProps } from "./tooltipMap.types"

// here we use react-tooltip library because it's compatible with react-simple-map

// for more information on how to use react-tooltip visit https://github.com/wwayne/react-tooltip

export const MapToolTip = (props: ToolTipMapProps) => {
  const { content } = props
  return <>{content && <ReactTooltip {...props}> {content} </ReactTooltip>}</>
}
