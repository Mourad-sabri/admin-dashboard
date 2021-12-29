import React, { Fragment } from "react"
import Head from "next/head"

import LoginFormCard from "../../admin/pages/Auth/login/LoginFormCard"
import { S_LoginPage__1 } from "../../admin/pages/Auth/login/loginPage-1.styled"

const Login = () => {
  return (
    <Fragment>
      <Head>
        <title> Login Page </title>
      </Head>
      <S_LoginPage__1>
        <LoginFormCard />
      </S_LoginPage__1>
    </Fragment>
  )
}

export default Login
