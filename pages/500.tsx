import Head from "next/head"
import { Fragment } from "react"
import Button from "../admin/core/Buttons/Button"
import { S_ErrorPage404 } from "../admin/pages/Error/errorPages.styled"

const ErrorPage500 = () => {
  return (
    <Fragment>
      <Head>
        <title> Server Error 500 </title>
      </Head>
      <S_ErrorPage404>
        <div className="error__container">
          <img src="/500.svg" alt="" className="error__img" />
          <div className="error__btn">
            <Button intent="primary"> Back To Home </Button>
          </div>
        </div>
      </S_ErrorPage404>
    </Fragment>
  )
}

export default ErrorPage500
