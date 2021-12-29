import { forwardRef, Ref } from "react"
import { X } from "react-bootstrap-icons"
import { S_Alerts } from "./Alerts.styled"
import { AlertsProps } from "./Alerts.types"
import { CSSTransition } from "react-transition-group"

const Alerts = forwardRef((props: AlertsProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { children, message, onClickRemove, show = true, icon } = props
  return (
    <CSSTransition unmountOnExit in={show} timeout={300}>
      <S_Alerts {...props} ref={ref}>
        {icon && <div className="alertsStyled__icon">{icon}</div>}
        <span className="alertsStyled__message">{children || message}</span>
        <div className="alertsStyled__removeIcon" onClick={onClickRemove}>
          <X />
        </div>
      </S_Alerts>
    </CSSTransition>
  )
})

Alerts.displayName = "Alert"

export default Alerts
