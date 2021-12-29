import { forwardRef } from "react"
import { S_Button, S_LoadingSpinner } from "./button.styled"
import { ButtonProps } from "./button.types"
import { useRouter } from "next/router"
const Button = forwardRef((props: ButtonProps, ref: any): JSX.Element => {
  // props
  const { children, title, isLoading, variant = "contained", intent, size = "md", icon, rigthIcon, disabled, onClick, href } = props

  const { push } = useRouter()

  // use routing when the href provided
  function handleRouting(e: any) {
    if (href) {
      push(href)
    } else if (onClick) {
      onClick!(e)
    }
  }

  return (
    <S_Button ref={ref} rounded="sm" size={size} variant={variant} role="button" {...props} disabled={isLoading || disabled} onClick={handleRouting}>
      {/* loading spinner */}
      {isLoading && (
        <div className="buttonStyled__loading">
          <S_LoadingSpinner variant={variant} intent={intent} size={size} />
        </div>
      )}
      {/* left icon */}
      {icon && <div className="buttonStyled__left-icon">{icon}</div>}
      {/*  */}
      {(children || title) && <span className="buttonStyled__title"> {children || title}</span>}
      {/*  */}
      {/* rigth icon */}
      {rigthIcon && <div className="buttonStyled__right-icon">{rigthIcon}</div>}
    </S_Button>
  )
})

Button.displayName = "Button"

export default Button
