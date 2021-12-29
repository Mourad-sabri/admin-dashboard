import { S_PasswordReset__2 } from "../../admin/pages/Auth/passwordReset/passwordReset.styled"
import { ResetPasswordForm } from "../../admin/pages/Auth/passwordReset/ResetPasswordForm"

const passwordReset = () => {
  return (
    <S_PasswordReset__2>
      <div className="resetPassword__svgContainer">
        <img src="/forgot_password.svg" className="resetPassword__svg" />
      </div>
      <div className="resetPassword__formCardContainer">
        <ResetPasswordForm />
      </div>
    </S_PasswordReset__2>
  )
}

export default passwordReset
