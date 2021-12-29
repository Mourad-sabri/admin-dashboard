import LoginFormCard from "../../admin/pages/Auth/login/LoginFormCard"
import { S_LoginPage__2 } from "../../admin/pages/Auth/login/loginPage-1.styled"

const Login = () => {
  return (
    <S_LoginPage__2>
      <div className="login__SvgContainer">
        <img src="/login.svg" className="login__svg" />
      </div>
      <div className="login__formContainer">
        <LoginFormCard />
      </div>
    </S_LoginPage__2>
  )
}

export default Login
