import { Fragment, MutableRefObject, useEffect, useRef, useState } from "react"
import { Search } from "react-bootstrap-icons"
import Input from "../../core/Inputs/BaseInput"
import Button from "../../core/Buttons/Button"
import { useMediaQuery } from "../../hooks/useMediaQuery/useMediaQuery"

export const SearchBarContainer = () => {
  const [width, setWidth] = useState<number | string>(300)

  const ref = useRef() as MutableRefObject<HTMLInputElement>

  const [value, setValue] = useState("")

  const { sm } = useMediaQuery({
    sm: 767,
  })

  useEffect(() => {
    function inputFocusIn() {
      setWidth("100%")
    }

    function inputFocusOut() {
      setWidth(300)
    }
    if (ref && ref.current) {
      ref.current.addEventListener("focusin", inputFocusIn)

      ref.current.addEventListener("focusout", inputFocusOut)
    }

    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener("focusin", inputFocusIn)
        ref.current.removeEventListener("focusout", inputFocusOut)
      }
    }
  }, [width, sm])

  return (
    <Fragment>
      <div className="layoutStyled__searchBar">
        {sm ? (
          <Input
            icon={<Search />}
            className="layoutStyled__searchBar-input"
            style={{
              width,
            }}
            ref={ref}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <Button size="sm" icon={<Search />} />
        )}
      </div>
    </Fragment>
  )
}
