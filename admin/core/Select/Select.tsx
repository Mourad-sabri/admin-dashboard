import Tippy from "@tippyjs/react/headless"
import { forwardRef, Fragment, MutableRefObject, Ref, useMemo, useRef } from "react"

import AutosizeInput from "react-input-autosize"
import useSelect from "use-select"
import { S_InputLoadingSpinner } from "../Inputs/Inputs.styled"
import Tag from "../Tags/Tag"
import { S_Select, S_SelectOptionsList } from "./select.styled"
import { SelectInputProps } from "./select.types"

const Select = forwardRef((props: SelectInputProps) => {
  // props

  const { value, handleChange, multi, isLoading, size = "sm", icon, rightIcon } = props

  const { placeholder, disabled, create } = props

  const options = useMemo(() => props.options, [props.options])

  const optionsRef = useRef() as MutableRefObject<HTMLDivElement>

  const elRef = useRef() as MutableRefObject<HTMLDivElement>

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>

  const modifiers: any = useMemo(() => {
    return [
      {
        name: "offset",
        options: {
          offset: [0, 7],
        },
      },
      {
        name: "sameWidth",
        enabled: true,
        fn: ({ state }: any) => {
          state.styles.popper.width = `${state.rects.reference.width}px`
        },
        phase: "beforeWrite",
        requires: ["computeStyles"],
        effect: ({ state }: any) => {
          state.elements.popper.style.width = `${state.elements.reference.clientWidth}px`
        },
      },
    ]
  }, [])

  const { visibleOptions, selectedOption, highlightedOption, getOptionProps, getInputProps, isOpen, setOpen } = useSelect({
    multi,
    options,
    value,
    onChange: handleChange,
    optionsRef,
    create,
  })

  return (
    <Fragment>
      <S_Select rounded="sm" size={size} {...props} isFocus={isOpen} ref={elRef} onClick={() => setOpen(true)}>
        {icon && <span className="selecteStyled__icon">{icon}</span>}

        <div className="selectStyled__select">
          {multi &&
            selectedOption.map((o, i) => {
              return (
                <Tag
                  size="sm"
                  style={{ marginTop: 3, marginRight: 1, marginBottom: 3 }}
                  allowRemove
                  onRemoveClick={() => handleChange!(Array.isArray(value) ? value.filter((d: string) => d !== o.value) : undefined)}
                  title={o.label}
                  key={i}
                />
              )
            })}
          <AutosizeInput
            placeholder={placeholder}
            disabled={disabled}
            inputRef={inputRef}
            {...getInputProps()}
            className="selectStyled__InputContainer"
            inputClassName="selectStyled__input"
            tabIndex={0}
          />
        </div>

        {isLoading && (
          <span className="inputStyled__loadingSpinner">
            <S_InputLoadingSpinner size={size} />
          </span>
        )}

        {rightIcon && <span className="selecteStyled__icon">{rightIcon}</span>}
      </S_Select>
      <Tippy
        reference={elRef}
        placement="bottom"
        visible={isOpen}
        render={(attr) => {
          return (
            <S_SelectOptionsList {...attr} ref={optionsRef}>
              <>{!visibleOptions.length ? <div className="selectStyled__no-options"> no options </div> : null}</>
              {visibleOptions.map((option, i) => {
                return (
                  <option
                    disabled={option.disabled}
                    className={`selectStyled__option`}
                    {...getOptionProps({
                      index: i,
                      option,
                    })}
                  >
                    {option.label}
                  </option>
                )
              })}
            </S_SelectOptionsList>
          )
        }}
        interactive
        popperOptions={{
          modifiers,
        }}
        onClickOutside={() => {
          setOpen(false)
        }}
      />
    </Fragment>
  )
})
export default Select
