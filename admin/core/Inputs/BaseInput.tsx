import { forwardRef, Ref, useEffect, useRef, useState } from "react"
import { S_InputWrapper, S_InputLoadingSpinner } from "./Inputs.styled"
import { InputProps } from "./inputs.types"

const Input = forwardRef((props: InputProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { icon, rightIcon, isLoading, size = "sm", inputStyle } = props

  const RightIconRef = useRef() as React.MutableRefObject<HTMLSpanElement>

  const IconRef = useRef() as React.MutableRefObject<HTMLSpanElement>

  const [RightIconWidth, setRightIconWidth] = useState<number | undefined>()

  const [IconWidthSize, setIconWidthSize] = useState<number | undefined>()

  useEffect(() => {
    if (RightIconRef && RightIconRef.current) {
      setRightIconWidth(RightIconRef.current.offsetWidth + 10)
    }
  })

  useEffect(() => {
    if (IconRef && IconRef.current) {
      setIconWidthSize(IconRef.current.offsetWidth + 5)
    }
  })

  return (
    <S_InputWrapper rounded="sm" size="sm" ref={ref} {...props} rigthIconSize={RightIconWidth} IconWidthSize={IconWidthSize}>
      {icon && (
        <span className="inputStyled__icon" ref={IconRef}>
          {icon}
        </span>
      )}
      <input {...props} className="inputStyled__input" size={undefined} style={inputStyle} ref={props.inputRef} />
      <span className="inputStyled__iconsWrapper">
        {isLoading && (
          <span className="inputStyled__loadingSpinner">
            <S_InputLoadingSpinner size={size} />
          </span>
        )}
        {rightIcon && (
          <span className="inputStyled__rightIcon" ref={RightIconRef}>
            {rightIcon}
          </span>
        )}
      </span>
    </S_InputWrapper>
  )
})

Input.displayName = "Input"

export default Input
