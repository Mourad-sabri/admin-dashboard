import React, { useState } from "react"
import { Eye, EyeSlash, Facebook, Instagram, Sun, Twitter, Youtube } from "react-bootstrap-icons"
import Button from "../../../core/Buttons/Button"
import { FormGroup } from "../../../core/Forms/FormGroup"
import { InputFormGroup } from "../../../core/Forms/InputFormGroup"
import * as yup from "yup"
import { useRouter } from "next/router"
import { useModeTheme } from "../../../hooks/useModeTheme/useModeTheme"

const LoginFormCard = () => {
  const [showPassword, setShowPassword] = useState(false)

  function togglePasswordShow() {
    setShowPassword(!showPassword)
  }

  const LoginFormValues = {
    email: "",
    password: "",
  }

  const loginValidation = yup.object().shape({
    email: yup.string().email("email is required").required("email is required"),
    password: yup.string().required("password is required").min(7, "write password width length more tha n 7"),
  })

  const { push } = useRouter()

  const { togglethemeMode } = useModeTheme()
  return (
    <div className="login__formCard">
      <div className="login__formCardheader">
        <div className="login__formCardHeader-title"> Log In </div>
        <div className="login__formCardHeader-socialMediaIcons">
          <Button icon={<Facebook />} size="sm" intent="primary" variant="text" />
          <Button icon={<Instagram />} size="sm" intent="primary" variant="text" />
          <Button icon={<Twitter />} size="sm" intent="primary" variant="text" />
          <Button icon={<Youtube />} size="sm" intent="primary" variant="text" />
          <Button icon={<Sun />} variant="text" intent="primary" onClick={togglethemeMode} style={{ marginLeft: 10 }} />
        </div>
      </div>
      <div className="login__formCard-form">
        <FormGroup initialValues={LoginFormValues} validationSchema={loginValidation} onSubmit={() => push("/dashboards/ecommerce")}>
          <InputFormGroup name="email" label="Email *" />
          <InputFormGroup
            name="password"
            label="Password *"
            type={showPassword ? "text" : "password"}
            rightIcon={<Button icon={showPassword ? <Eye /> : <EyeSlash />} size="sm" variant="text" onClick={togglePasswordShow} />}
          />
          <div className="login__formCard-forgetPassword"> forget Password ! </div>
          <Button intent="primary" rounded="full" className="login__btn">
            Log In
          </Button>
          <div className="login__formCard-newAccount"> Or Create New Account </div>
        </FormGroup>
      </div>
    </div>
  )
}

export default LoginFormCard
