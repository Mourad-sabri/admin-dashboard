import styled from "styled-components"

export const S_Layout = styled.div`
  width: 100%;
  height: 100vh;

  & .layoutStyled__container {
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
  }

  & .layoutStyled__topNavBar {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
  }

  & .layoutStyed__pageConatiner {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 5px;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 11px;
    }
  }

  & .layoutStyed__sideConatiner {
    width: 200px;
    height: 100%;
    flex-shrink: 0;
  }

  /* top nav bar */
  & .layoutStyled__sideBarToggleBtn {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  & .layoutStyled__logoContainer {
    width: calc(100% - 170px);
    height: 100%;
    flex-shrink: 0;
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: 250px;
    }
  }

  & .layoutStyled__searchBarContainer {
    width: 35px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: 70%;
    }
  }

  & .layoutStyled__buttonsList {
    min-width: 35px;
    max-width: 35px;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    & button {
      margin-right: 0px;
    }
    align-items: center;
    justify-content: flex-end;

    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      max-width: 300px;
      min-width: 30px;
      flex-shrink: 0;
      & button {
        margin-right: 7px;
      }
    }
  }

  & .layoutStyled__avatar {
    width: 50px;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .layoutStyled__searchBar {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 0px;
    padding-left: 0px;
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      padding-right: 10px;
      padding-left: 10px;
    }
  }

  & .layoutStyled__searchBar-input {
    transition: width 0.7s ease-in-out;
  }

  & .layoutStyled__logoContainer-img {
    width: 100%;
    height: 100%;
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

S_Layout.displayName = "LayoutStyled"
