import styled, { css } from "styled-components"
import { bgTransition, flexCenter } from "../../../../styles/styles"

const S_RegisterFormCard = css`
  & .register__Card {
    width: 100%;
    min-height: 500px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
    box-shadow: 0 0 1px 1px var(--bg-primary);
    ${bgTransition}
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: 500px;
    }
  }

  & .register__formCard {
    width: 400px;
    height: 337px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
    box-shadow: 0 0 1px 1px var(--bg-primary);
    ${bgTransition}
  }

  & .register__formCardheader {
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  }

  & .register__formCardHeader-title {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 17px;
    font-size: 23px;
    color: ${(p) => p.theme.colors.primary};
  }

  & .register__formCardHeader-socialMediaIcons {
    width: 50%;
    height: 100%;
    ${flexCenter}
  }

  & .register__form {
    width: 100%;
    min-height: 300px;
    padding: 10px;
  }

  & .register__inputContainer {
    width: 100%;
    display: block;
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    & .register__form-input {
      width: 100%;
      @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
        width: 230px;
      }
    }
  }

  & .register__registerBtn {
    width: 100%;
    margin-top: 10px;
  }

  & .register__loginLink {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    text-decoration: underline;
    cursor: default;
  }
`

export const S_RegisterPage__1 = styled.div`
  width: 100%;
  height: 100vh;
  ${flexCenter}
  ${S_RegisterFormCard}
`

export const S_RegisterPage__2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  & .register__svgContainer {
    width: calc(100% - 500px);
    height: 100%;
    display: none;
    padding: 50px;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      display: block;
    }
  }

  & .register__container {
    width: 100%;
    height: 100%;
    ${flexCenter}
    padding: 0px 5px;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: 500px;
    }
  }

  ${S_RegisterFormCard}
`
