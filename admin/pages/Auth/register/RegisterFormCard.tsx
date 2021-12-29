import React from "react"
import { Facebook, Instagram, Sun, Twitter, Youtube } from "react-bootstrap-icons"
import Button from "../../../core/Buttons/Button"
import { FormGroup } from "../../../core/Forms/FormGroup"
import { InputFormGroup } from "../../../core/Forms/InputFormGroup"
import * as yup from "yup"
import { useModeTheme } from "../../../hooks/useModeTheme/useModeTheme"
const RegisterFormCard = () => {
  const RegisterValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const registerValidation = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    userName: yup.string().required("required"),
    email: yup.string().required("required"),
    password: yup.string().required("required"),
    confirmPassword: yup.string().required("required"),
  })

  const { togglethemeMode } = useModeTheme()
  return (
    <div className="register__Card">
      <div className="register__formCardheader">
        <div className="register__formCardHeader-title"> Register </div>
        <div className="register__formCardHeader-socialMediaIcons">
          <Button icon={<Facebook />} size="sm" intent="primary" variant="text" />
          <Button icon={<Instagram />} size="sm" intent="primary" variant="text" />
          <Button icon={<Twitter />} size="sm" intent="primary" variant="text" />
          <Button icon={<Youtube />} size="sm" intent="primary" variant="text" />
          <Button icon={<Sun />} variant="text" intent="primary" onClick={togglethemeMode} style={{ marginLeft: 10 }} />
        </div>
      </div>
      <div className="register__form">
        <FormGroup initialValues={RegisterValues} onSubmit={() => console.log()} validationSchema={registerValidation}>
          <div className="register__inputContainer">
            <InputFormGroup name="firstName" label="First Name *" className="register__form-input" />
            <InputFormGroup name="lastName" label="Last Name * " className="register__form-input" />
          </div>
          <InputFormGroup name="userName" label="UserName *" />
          <InputFormGroup name="email" label="Email *" />
          <InputFormGroup name="password" label="Password * " />
          <InputFormGroup name="confirmPassword" label="Confirm Password  *" />
          <Button intent="primary" size="sm" className="register__registerBtn">
            Register
          </Button>
          <div className="register__loginLink">or Log In</div>
        </FormGroup>
      </div>
    </div>
  )
}

export default RegisterFormCard
