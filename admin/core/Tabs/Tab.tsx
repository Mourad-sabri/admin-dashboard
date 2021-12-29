import React, { forwardRef, Ref } from "react"
import { TabProps } from "./tabs.types"

const Tab = forwardRef((props: TabProps, ref: Ref<HTMLDivElement>) => {
  // props
  return (
    <div ref={ref} {...props}>
      {props.children}
    </div>
  )
})

Tab.displayName = "Tab"

export default Tab
