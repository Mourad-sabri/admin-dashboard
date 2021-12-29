import React, { Fragment } from "react"
import { S_PasswordReset__1 } from "../../admin/pages/Auth/passwordReset/passwordReset.styled"
import Head from "next/head"
import { ResetPasswordForm } from "../../admin/pages/Auth/passwordReset/ResetPasswordForm"
import { S_Auth2FA__1 } from "../../admin/pages/Auth/auth-2FA/auth2fa.styled"
import { Auth2FAForm } from "../../admin/pages/Auth/auth-2FA/auth2FAForm"

const passwordReset = () => {
  return (
    <Fragment>
      <Head>
        <title> Password Reset </title>
      </Head>
      <S_Auth2FA__1>
        <Auth2FAForm />
      </S_Auth2FA__1>
    </Fragment>
  )
}

export default passwordReset
