import { forwardRef, Ref } from "react"
import Button from "../Buttons/Button"
import Modal from "../Modal/Modal"
import { S_AlertModal } from "./alertModal.styled"
import { AlertModalProps } from "./alertModal.type"

const AlertModal = forwardRef((props: AlertModalProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { intent, actionButtonProps, actionButtonTitle, onClose, allowCancelButton = true, cancelButtonProps } = props
  const { message, children, icon } = props
  return (
    <Modal {...props}>
      <S_AlertModal {...props} ref={ref}>
        <div className="alertModalStyled__container">
          {icon && <div className="alertModalStyled__icon">{icon}</div>}
          <div className="alertModalstyled__message">{children || message}</div>
        </div>
        <div className="alertModalStyled__buttons">
          {allowCancelButton && (
            <Button variant="text" {...cancelButtonProps} size="sm" onClick={onClose} className="alertModalStyled__cancelButton">
              cancel
            </Button>
          )}
          {actionButtonTitle && (
            <Button {...actionButtonProps} size="sm" intent={intent}>
              {actionButtonTitle}
            </Button>
          )}
        </div>
      </S_AlertModal>
    </Modal>
  )
})

AlertModal.displayName = "AlertModal"

export default AlertModal
