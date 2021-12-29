import Head from "next/head"
import { Fragment } from "react"
import Button from "../admin/core/Buttons/Button"
import { S_ErrorPage404 } from "../admin/pages/Error/errorPages.styled"

const ErrorPage404 = () => {
  return (
    <Fragment>
      <Head>
        <title> Page Not Found 404 </title>
      </Head>
      <S_ErrorPage404>
        <div className="error__container">
          <img src="/404.svg" alt="" className="error__img" />
          <div className="error__btn">
            <Button intent="primary"> Back To Home </Button>
          </div>
        </div>
      </S_ErrorPage404>
    </Fragment>
  )
}

export default ErrorPage404
