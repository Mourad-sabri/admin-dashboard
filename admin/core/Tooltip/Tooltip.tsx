import Tippy, { TippyProps } from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/animations/scale-extreme.css"

export interface TooltipProps extends TippyProps {
  children?: JSX.Element
  content?: string | JSX.Element
  padding?: string
}

export const Tooltip = (props: TooltipProps) => {
  const { children, content, padding } = props
  return (
    <Tippy {...props} content={<div style={{ padding: padding ? padding : 5 }}> {content} </div>} theme="asmaa" animation="scale-extreme">
      {children}
    </Tippy>
  )
}

export default Tooltip
