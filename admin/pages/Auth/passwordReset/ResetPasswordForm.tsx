import React, { Fragment } from "react"
import { Sun } from "react-bootstrap-icons"
import Button from "../../../core/Buttons/Button"
import Divider from "../../../core/Dividers/Divider"
import { FormGroup } from "../../../core/Forms/FormGroup"
import { InputFormGroup } from "../../../core/Forms/InputFormGroup"
import { useModeTheme } from "../../../hooks/useModeTheme/useModeTheme"
import * as yup from "yup"

export const ResetPasswordForm = () => {
  const resetPasswordValues = {
    email: "",
  }

  const formValidation = yup.object().shape({
    email: yup.string().required("required"),
  })

  const { togglethemeMode } = useModeTheme()

  return (
    <Fragment>
      <div className="passwordResetPage__formCard">
        <div className="passwordResetPage__formCardheader">
          <div className="passwordResetPage__formCardHeader-title">Password Reset</div>
          <div className="loginPage__formCardHeader-themeModeBtn">
            <Button icon={<Sun />} variant="text" intent="primary" onClick={togglethemeMode} style={{ marginLeft: 10 }} />
          </div>
        </div>
        <div className="passwordResetPage__formCard-form">
          <FormGroup initialValues={resetPasswordValues} onSubmit={() => console.log()} validationSchema={formValidation}>
            <InputFormGroup name="email" label="Enter Your Email To Receive New Password " />
            <Button rounded="full" intent="primary" className="passwordResetPage__btn">
              Submit
            </Button>
          </FormGroup>
          <Divider spaceTop={20} title="OR" postiton="center" />
          <Button rounded="full" intent="primary" className="passwordResetPage__btn">
            Login
          </Button>
        </div>
      </div>
    </Fragment>
  )
}
