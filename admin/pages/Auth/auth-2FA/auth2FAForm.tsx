import React, { Fragment } from "react"
import { Sun } from "react-bootstrap-icons"
import Button from "../../../core/Buttons/Button"
import { FormGroup } from "../../../core/Forms/FormGroup"
import { InputFormGroup } from "../../../core/Forms/InputFormGroup"
import { useModeTheme } from "../../../hooks/useModeTheme/useModeTheme"
import * as yup from "yup"

export const Auth2FAForm = () => {
  const resetPasswordValues = {
    code: "",
  }

  const formValidation = yup.object().shape({
    code: yup.string().required("required"),
  })

  const { togglethemeMode } = useModeTheme()

  return (
    <Fragment>
      <div className="auth2FAPage__formCard">
        <div className="auth2FAPage__formCardheader">
          <div className="auth2FAPage__formCardHeader-title">Password Reset</div>
          <div className="auth2FAPage__formCardHeader-themeModeBtn">
            <Button icon={<Sun />} variant="text" intent="primary" onClick={togglethemeMode} style={{ marginLeft: 10 }} />
          </div>
        </div>
        <div className="auth2FAPage__formCard-form">
          <FormGroup initialValues={resetPasswordValues} onSubmit={() => console.log()} validationSchema={formValidation}>
            <InputFormGroup name="code" label="Enter The Code That We Sent To Your Email " />
            <Button rounded="full" intent="primary" className="auth2FAPage__btn">
              Submit
            </Button>
          </FormGroup>
        </div>
      </div>
    </Fragment>
  )
}
