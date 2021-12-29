import { Props } from "react-bootstrap-icons"
import { Intent } from "../../../@types/types"
import { ButtonProps } from "../Buttons/button.types"
import { ModalProps } from "../Modal/modal.types"

export interface AlertModalProps extends ModalProps {
  intent?: Intent // the intent will apply to buttons and icons
  actionButtonTitle?: string // by default  the action button will not rendred unless the title is provided
  actionButtonProps?: ButtonProps // action button props
  allowCancelButton?: Boolean /** @default true */ // if you want to remove cancel button set it to false
  cancelButtonProps?: ButtonProps // cancel buton props
  message?: string // message to display on the alert
  children?: JSX.Element | JSX.Element[] // you can also provide the message as children
  icon?: Props | JSX.Element // alert icon
}
