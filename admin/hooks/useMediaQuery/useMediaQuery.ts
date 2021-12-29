import { useState, useMemo, useEffect } from "react"
import { useForceUpdate } from "../useForceUpdate/useForceUpdate"
import { UseMediaQueryInstance, useMediaQueryProps } from "./useMediaQuery.types"

// this hook built with match media

// used to render some components based on window with

// it's not like css mediaQuery

//  useMediaQuery remove the content for the dom until the window size match the selected size

export function useMediaQuery(props: useMediaQueryProps): UseMediaQueryInstance {
  // props
  const { sm, md, xl, lg } = useMemo(() => props, [props])

  const [mediaqueryInstnace, setMediaQueryInstance] = useState<UseMediaQueryInstance>({
    sm: typeof window !== "undefined" && sm ? window.matchMedia(`(min-width: ${sm}px)`).matches : false,
    md: typeof window !== "undefined" && md ? window.matchMedia(`(min-width: ${md}px)`).matches : false,
    lg: typeof window !== "undefined" && lg ? window.matchMedia(`(min-width: ${lg}px)`).matches : false,
    xl: typeof window !== "undefined" && xl ? window.matchMedia(`(min-width: ${xl}px)`).matches : false,
  })

  useEffect(() => {
    function isMateched(size: number) {
      return window.matchMedia(`(min-width: ${size}px)`)
    }

    function updateSm(e: any) {
      setMediaQueryInstance({ ...mediaqueryInstnace, sm: e.matches })
    }

    function updateMd(e: any) {
      setMediaQueryInstance({ ...mediaqueryInstnace, md: e.matches })
    }
    function updateLg(e: any) {
      setMediaQueryInstance({ ...mediaqueryInstnace, lg: e.matches })
    }
    function updateXl(e: any) {
      setMediaQueryInstance({ ...mediaqueryInstnace, xl: e.matches })
    }
    if (sm) {
      isMateched(sm).addEventListener("change", updateSm)
    }
    if (md) {
      isMateched(md).addEventListener("change", updateMd)
    }
    if (lg) {
      isMateched(lg).addEventListener("change", updateLg)
    }
    if (xl) {
      isMateched(xl).addEventListener("change", updateXl)
    }

    return () => {
      if (sm) {
        isMateched(sm).removeEventListener("change", updateSm)
      }
      if (md) {
        isMateched(md).removeEventListener("change", updateMd)
      }
      if (lg) {
        isMateched(lg).removeEventListener("change", updateLg)
      }
      if (xl) {
        isMateched(xl).removeEventListener("change", updateXl)
      }
    }
  }, [])

  return mediaqueryInstnace
}
