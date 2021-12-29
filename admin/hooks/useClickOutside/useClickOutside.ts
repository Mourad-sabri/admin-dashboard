import React, { useEffect, useRef } from "react"
import { RefProps } from "./useClickOutside.types"

// hook to detect click outside of the selected element

export function useClickOutside<T extends RefProps>(handler: () => void) {
  //
  let domNodeRef = useRef() as React.MutableRefObject<T>

  useEffect(() => {
    const clickFunction = (e: any) => {
      if (domNodeRef && domNodeRef.current && !domNodeRef.current.contains(e.target) && handler) {
        // call the function
        handler()
      }
    }

    document.addEventListener("mousedown", clickFunction)

    return () => document.removeEventListener("mousedown", clickFunction)
  })

  // return ref dom
  return domNodeRef
  //
}
