import { DateTimePickerProps } from "react-flatpickr"
import { Intent, Rounded, Size } from "../../../@types/types"

export interface DateInputProps extends Partial<Omit<DateTimePickerProps, "size">> {
  intent?: Intent // apply intent color
  icon?: JSX.Element //  left icon
  rightIcon?: JSX.Element // right icon
  isLoading?: boolean /**@default false */ // loading spinner
  rounded?: Rounded // border-radius
  size?: Size // input size
}
