import styled, { css } from "styled-components"
import { bgTransition, flexCenter } from "../../../../styles/styles"

// re-use the same style for the card

export const S_Auth2FA_Card = css`
  /*  */
  & .auth2FAPage__formCard {
    width: 400px;
    height: 250px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
    box-shadow: 0 0 1px 1px var(--bg-primary);
    ${bgTransition}
  }

  & .auth2FAPage__formCardheader {
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  }

  & .auth2FAPage__formCardHeader-title {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 17px;
    font-size: 23px;
    color: ${(p) => p.theme.colors.primary};
  }

  & .auth2FAPage__formCard-form {
    width: 100%;
    height: calc(330px - 50px);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 30px;
  }

  & .auth2FAPage__btn {
    width: 100%;
    margin-top: 10px;
  }

  & .auth2FAPage__formCardHeader-themeModeBtn {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-end;
  }
  /*  */
`

export const S_Auth2FA__1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${S_Auth2FA_Card}
`

export const S_Auth2FA__2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  & .auth2FAPage__svgContainer {
    width: calc(100% - 500px);
    height: 100%;
    padding: 70px;
    display: none;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      display: block;
    }
  }

  & .auth2FAPage__svg {
    width: 100%;
    height: 100%;
  }

  & .auth2FAPage__formCardContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: 500px;
    }
  }

  ${S_Auth2FA_Card}/*  */
`
