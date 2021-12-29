import React, { Fragment } from "react"
import { S_RegisterPage__2 } from "../../admin/pages/Auth/register/register.styled"
import Head from "next/head"
import RegisterFormCard from "../../admin/pages/Auth/register/RegisterFormCard"
const Register = () => {
  return (
    <Fragment>
      <Head>
        <title> Register Page 2 </title>
      </Head>
      <S_RegisterPage__2>
        <div className="register__svgContainer">
          <img src="/register.svg" className="register__svg" />
        </div>
        <div className="register__container">
          <RegisterFormCard />
        </div>
      </S_RegisterPage__2>
    </Fragment>
  )
}

export default Register
