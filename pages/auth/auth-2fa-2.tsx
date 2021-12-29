import { S_Auth2FA__2 } from "../../admin/pages/Auth/auth-2FA/auth2fa.styled"
import { Auth2FAForm } from "../../admin/pages/Auth/auth-2FA/auth2FAForm"
import { S_PasswordReset__2 } from "../../admin/pages/Auth/passwordReset/passwordReset.styled"
import { ResetPasswordForm } from "../../admin/pages/Auth/passwordReset/ResetPasswordForm"

const Auth2FA = () => {
  return (
    <S_Auth2FA__2>
      <div className="auth2FAPage__svgContainer">
        <img src="/two_factor_authentication.svg" className="auth2FAPage__svg" />
      </div>
      <div className="auth2FAPage__formCardContainer">
        <Auth2FAForm />
      </div>
    </S_Auth2FA__2>
  )
}

export default Auth2FA
