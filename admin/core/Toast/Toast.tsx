import React, { forwardRef } from "react"
import { X } from "react-bootstrap-icons"
import { CSSTransition } from "react-transition-group"
import Portal from "../Portal/Portal"
import { S_Toast } from "./toast.styled"
import { ToastProps } from "./toast.types"

const Toast = forwardRef((props: ToastProps, ref: any) => {
  // props
  const { actionButtonTitle, icon, message, onActionButtonClick, children, showToast, onShow, onHide, onClose } = props

  return (
    <Portal selector="#toast">
      <CSSTransition in={showToast} timeout={{ enter: 0, exit: 200 }} unmountOnExit onEntered={onShow} onExited={onHide}>
        <S_Toast {...props} ref={ref}>
          {icon && <div className="toastStyled__icon">{icon}</div>}

          <div className="toastStyled__message"> {children || message} </div>

          {actionButtonTitle && (
            <button className="toastStyled__button" onClick={onActionButtonClick}>
              {actionButtonTitle}
            </button>
          )}

          <div className="toastStyled__removeButton" onClick={onClose}>
            <X />
          </div>
        </S_Toast>
      </CSSTransition>
    </Portal>
  )
})

Toast.displayName = "Toast"

export default Toast
