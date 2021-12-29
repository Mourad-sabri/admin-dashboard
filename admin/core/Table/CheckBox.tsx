import React, { forwardRef, useEffect, useRef } from "react"
import CheckBox from "../CheckBox/Checkbox"

export const IndeterminateCheckBox = forwardRef(({ indeterminate, ...rest }: any, ref: any) => {
  const defaultRef = useRef()
  const resolvedRef = ref || defaultRef
  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])
  return <CheckBox ref={defaultRef} {...rest} />
})
