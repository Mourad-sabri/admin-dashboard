import React, { Ref } from "react"
import { forwardRef } from "react"
import { CSSTransition } from "react-transition-group"
import { useClickOutside } from "../../hooks/useClickOutside/useClickOutside"
import Portal from "../Portal/Portal"
import { S_Drawer } from "./drawer.styled"
import { DrawerProps } from "./drawer.types"

const Drawer = forwardRef((props: DrawerProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { isOpen, children, onClose, allowClickOutisdeClose = true } = props

  // close the drawer when the user click outside the drawer
  const domRef = useClickOutside<HTMLDivElement>(() => {
    if (onClose) {
      onClose()
    }
  })

  return (
    <Portal selector="#drawer">
      <CSSTransition in={isOpen} timeout={{ exit: 300, enter: 0 }} unmountOnExit>
        <S_Drawer postion="right" {...props} ref={ref}>
          <div className="drawerStyled__drawer" ref={allowClickOutisdeClose ? domRef : undefined}>
            {children}
          </div>
        </S_Drawer>
      </CSSTransition>
    </Portal>
  )
})

Drawer.displayName = "Drawer"

export default Drawer
