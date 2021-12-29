import { forwardRef, Fragment, Ref } from "react"
import { S_Modal } from "./modal.styled"
import { ModalProps } from "./modal.types"
import { CSSTransition } from "react-transition-group"
import Portal from "../Portal/Portal"
import { useClickOutside } from "../../hooks/useClickOutside/useClickOutside"

const Modal = forwardRef((props: ModalProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { show, children, onClose, clickOutsideClose = true } = props
  const domRef = useClickOutside<any>(() => (onClose ? onClose() : undefined))

  return (
    <Fragment>
      {/* we use portal here to render the modal */}
      <Portal selector="#modal">
        <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
          <S_Modal {...props} ref={ref}>
            {/* render modal conent */}
            <div className="modalStyled__content" ref={clickOutsideClose ? domRef : undefined}>
              {children}
            </div>
          </S_Modal>
        </CSSTransition>
      </Portal>
    </Fragment>
  )
})

Modal.displayName = "Modal"

export default Modal
