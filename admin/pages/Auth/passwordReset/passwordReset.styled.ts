import styled, { css } from "styled-components"
import { bgTransition, flexCenter } from "../../../../styles/styles"

export const S_PasswordFormCard = css`
  & .passwordResetPage__formCard {
    width: 400px;
    height: 300px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
    box-shadow: 0 0 1px 1px var(--bg-primary);
    ${bgTransition}
  }

  & .passwordResetPage__formCardheader {
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  }

  & .passwordResetPage__formCardHeader-title {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 17px;
    font-size: 23px;
    color: ${(p) => p.theme.colors.primary};
  }

  & .passwordResetPage__formCard-form {
    width: 100%;
    height: calc(330px - 50px);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
  }

  & .passwordResetPage__btn {
    width: 100%;
    margin-top: 10px;
  }

  & .loginPage__formCardHeader-themeModeBtn {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-end;
  }
`

export const S_PasswordReset__1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${S_PasswordFormCard}
`

export const S_PasswordReset__2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  & .resetPassword__svgContainer {
    width: calc(100% - 500px);
    height: 100%;
    padding: 70px;
    display: none;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      display: block;
    }
  }

  & .resetPassword__svg {
    width: 100%;
    height: 100%;
  }

  & .resetPassword__formCardContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: 500px;
    }
  }

  ${S_PasswordFormCard}/*  */
`
