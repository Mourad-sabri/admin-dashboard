import styled, { keyframes } from "styled-components"

const scroll = keyframes`

0% {
    transform: translateX(0%);
}
100% {
    transform: translateX(-100%);
}

`

export const S_LandingPage = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 11px;
  }

  & .landingPage__container {
    width: 100%;
    min-height: 400px;
    /* background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85)); */
  }

  & .landingPage__nav-toggleBtn {
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      display: none;
    }
  }

  & .landingPage__nav {
    width: 100%;
    height: 50px;
    display: flex;
  }

  & .landingPage__nav-logo {
    width: calc(100% - 350px);
    height: 100%;

    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: 200px;
    }

    & img {
      width: 100%;
      height: 100%;
    }
  }
  & .landingPage__nav-links {
    width: calc(100% - 500px);
    height: 100%;

    overflow-x: auto;
    align-items: center;
    display: none;
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      display: flex;
    }

    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: white;
      border-radius: 11px;
    }

    & button {
      margin-left: 5px;
      color: var(--text-color);
      flex-shrink: 0;
    }
  }

  & .landingPage__nav-btns {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & button {
      margin-right: 5px;
    }
  }

  & .landingPage__start {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-wrap: wrap;
  }

  & .landingPage__text {
    width: 100%;
    height: 300px;

    color: var(--text-color);
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: calc(100% - 500px);
      height: 400px;
    }
  }

  & .landingPage__svgContainer {
    width: 100%;
    height: 300px;
    padding: 10px;
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: 500px;
      height: 400px;
    }
  }

  & .landingPage__svg {
    width: 100%;
    height: 100%;
  }

  & .landingPage__imgsContainer {
    width: 100%;
    height: 100px;
    margin-top: 5px;
    overflow: hidden;
    display: flex;
  }

  & .landingPage__slide {
    height: 100px;
    width: 1310px;
    animation: ${scroll} 20s infinite linear;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  & .landingPage__img {
    width: 100px;
    height: 100px;
    margin-left: 10px;
  }

  & .landingPage__features {
    width: 100%;
    min-height: 300px;
    margin-top: 30px;
  }

  & .landingPage__cards {
    width: 100%;
    min-height: 200px;
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
  }

  & .flex-direction {
    flex-wrap: wrap-reverse;
  }

  & .landingPage__content {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 20px;

    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: 50%;
    }
  }

  & .landingPage__imgCard {
    width: 100%;
    height: 200px;
    & img {
      width: 100%;
      height: 100%;
    }
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: 50%;
    }
  }

  & .landingPage__footer {
    width: 100%;
    height: 50px;
    border-top: 1px solid var(--text-color);
    display: flex;
  }

  & .landingPage__copyRight {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  & .landingPage__socialNetwork-btns {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
  }

  & .landingPage__accordion {
    width: 100%;
    min-height: 200px;
    padding: 11px;
  }

  & .logo {
    font-size: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    color: dodgerblue;
  }
`
