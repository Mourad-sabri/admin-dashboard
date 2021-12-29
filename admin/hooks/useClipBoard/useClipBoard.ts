import { MutableRefObject, useEffect, useRef } from "react"
import ClipboardJS from "clipboard"

// this hook allow you to use ClipboardJS library in react in simple way

// for more docs visit https://github.com/zenorocha/clipboard.js

export function useClipBoard<T extends HTMLButtonElement | null>(options: ClipboardJS.Options) {
  const ElementRef = useRef(null) as MutableRefObject<T>
  const ClipBoardRef = useRef(null) as MutableRefObject<ClipboardJS | null>

  useEffect(() => {
    ClipBoardRef.current = new ClipboardJS(ElementRef.current!, options)

    return () => {
      ClipBoardRef.current!.destroy()
    }
  }, [])

  return ElementRef
}
