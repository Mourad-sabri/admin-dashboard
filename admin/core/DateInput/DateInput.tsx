import { forwardRef, Ref } from "react"
import { DateInputProps } from "./dateInput.types"
import FlatPicker from "react-flatpickr"
import "flatpickr/dist/themes/airbnb.css"
import { Calendar } from "react-bootstrap-icons"
import Input from "../Inputs/BaseInput"

const DateInput = forwardRef((props: DateInputProps, ref: Ref<HTMLInputElement>) => {
  // props
  const { intent, size, icon, rightIcon, rounded, disabled, isLoading, className } = props
  return (
    <FlatPicker
      render={({ value, defaultValue }: any, inputRef) => {
        return (
          <Input
            // value={value}
            defaultValue={defaultValue}
            inputRef={inputRef}
            rightIcon={rightIcon || <Calendar />}
            icon={icon}
            intent={intent}
            size={size || "sm"}
            rounded={rounded || "sm"}
            disabled={disabled}
            isLoading={isLoading}
            className={className}
            ref={ref}
          />
        )
      }}
      {...props}
      size={undefined}
    />
  )
})

export default DateInput

DateInput.displayName = "DateInput"
