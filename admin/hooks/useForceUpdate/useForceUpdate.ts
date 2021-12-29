import { useState } from "react"

// this simple hook allow use to force component re-render

export function useForceUpdate() {
  const [value, setValue] = useState(0)

  return () => setValue((value) => value + 1)
}
