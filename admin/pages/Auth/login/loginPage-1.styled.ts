import styled, { css } from "styled-components"
import { bgTransition, flexCenter } from "../../../../styles/styles"

const S_LoginFormCard = css`
  & .login__formCard {
    width: 400px;
    height: 337px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
    box-shadow: 0 0 1px 1px var(--bg-primary);
    ${bgTransition}
  }

  & .login__formCardheader {
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  }

  & .login__formCardHeader-title {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 17px;
    font-size: 23px;
    color: ${(p) => p.theme.colors.primary};
  }

  & .login__formCardHeader-socialMediaIcons {
    width: 50%;
    height: 100%;
    ${flexCenter}
  }

  & .login__formCard-form {
    width: 100%;
    height: calc(330px - 50px);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
  }

  & .login__formCard-forgetPassword,
  .login__formCard-newAccount {
    width: 100%;
    text-align: end;
    font-size: 14px;
    text-decoration: underline;
    margin-top: 5px;
    cursor: default;
  }

  & .login__btn {
    width: 100%;
    margin-top: 10px;
  }

  & .login__formCard-newAccount {
    text-align: center;
    margin-top: 17px;
  }
`

export const S_LoginPage__1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* form card */
  ${S_LoginFormCard}
`

export const S_LoginPage__2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  & .login__SvgContainer {
    width: calc(100% - 500px);
    height: 100%;
    display: none;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      display: block;
    }
  }

  & .login__formContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: 500px;
    }
  }
  /* form card */

  ${S_LoginFormCard}

  & .login__svg {
    width: 100%;
    height: 100%;
  }
`
