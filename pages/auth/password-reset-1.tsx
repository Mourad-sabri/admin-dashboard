import React, { Fragment } from "react"
import { S_PasswordReset__1 } from "../../admin/pages/Auth/passwordReset/passwordReset.styled"
import Head from "next/head"
import { ResetPasswordForm } from "../../admin/pages/Auth/passwordReset/ResetPasswordForm"

const passwordReset = () => {
  return (
    <Fragment>
      <Head>
        <title> Password Reset </title>
      </Head>
      <S_PasswordReset__1>
        <ResetPasswordForm />
      </S_PasswordReset__1>
    </Fragment>
  )
}

export default passwordReset
