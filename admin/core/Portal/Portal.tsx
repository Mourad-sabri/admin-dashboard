import { createPortal } from "react-dom"
import { useEffect, useState, useRef } from "react"
import { PortalProps } from "./portal.types"

/**
 * 
 *@required selector 
 @example selector="#modal"
 */

function Portal(props: PortalProps) {
  // props
  const { children, selector } = props

  const [mounted, setMounted] = useState<boolean>(false)

  const ref = useRef<any>()

  useEffect(() => {
    if (selector) {
      ref.current = document.querySelector(selector)
    }
    setMounted(true)
  }, [selector])

  // pass children
  return mounted ? createPortal(children, ref.current) : null
}

export default Portal
