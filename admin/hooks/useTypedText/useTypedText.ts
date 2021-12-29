import { MutableRefObject, useEffect, useRef } from "react"
import Typed, { TypedOptions } from "typed.js"

// this hook built with typed.js library to allow you build animated typed text in react in simple way

// for more docs visit  https://github.com/mattboldt/typed.js

export function useTypedText<T extends HTMLSpanElement | null>(props: TypedOptions) {
  const TypedRef = useRef(null) as MutableRefObject<Typed | null>

  const ELementRef = useRef(null) as MutableRefObject<T>

  useEffect(() => {
    TypedRef.current = new Typed(ELementRef.current!, props)

    return () => {
      TypedRef.current!.destroy()
    }
  }, [])

  return ELementRef
}
