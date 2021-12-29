import styled from "styled-components"
import { flexCenter, bgTransition } from "../../../../styles/styles"

export const S_SaasPage = styled.div`
  /*  */
  & .sDashboard__staticsCard {
    background-color: ${`var(--bg-primary-A)`};
    box-shadow: 0 0 2px 2px ${`var(--bg-primary-A)`};
  }

  & .Dashboard__container {
    width: 100%;
    min-height: 350px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & .Dashboard__usersData {
    background-color: ${`var(--bg-primary-A)`};
    height: 350px;
    width: 100%;
    border-radius: ${(p) => p.theme.rounded.sm};
    ${bgTransition}
    margin-top: 10px;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: calc(100% - 410px);
      margin-top: 0px;
    }
  }

  & .Dashboard__usersDataHeader {
    height: 50px;
    width: 100%;
    display: flex;
  }

  & .Dashboard__usersDataHeader-title {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 10px;
    font-size: 20px;
  }

  & .Dashboard__usersDataHeader-select {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-end;
    padding-right: 10px;

    & select {
      border: none;
      outline: none;
      padding: 5px;
      border-radius: ${(p) => p.theme.rounded.sm};
      background-color: var(--bg-secondary);
      color: var(--text-color);
      ${bgTransition}
    }
  }

  & .Dashboard__usersDataChart {
    width: 100%;
    height: calc(350px - 50px);
    color: burlywood;
  }

  & .Dashboard__newUser {
    width: 100%;
    height: 350px;
    border-radius: ${(p) => p.theme.rounded.sm};
    background-color: ${`var(--bg-primary-A)`};
    ${bgTransition}
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: 400px;
    }
  }

  & .listStyled__showMore.listStyled__showMore {
    height: 38px;
  }

  & .Dashboard__workProgress {
    width: 100%;
    height: 80px;
    border-radius: ${(p) => p.theme.rounded.sm};
    background-color: ${`var(--bg-primary-A)`};
    ${bgTransition}
    margin-top: 10px;
  }

  & .Dashboard__workProgress-header {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 20px;
  }

  & .Dashboard__workProgress-progressBar {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 3px;
    padding-right: 3px;
  }

  & .Dashboard__SaasData {
    width: 100%;
    height: 400px;
    border-radius: ${(p) => p.theme.rounded.sm};
    background-color: ${`var(--bg-primary-A)`};
    ${bgTransition}
    margin-top: 10px;
  }

  & .Dashboard__SaasData-header {
    width: 100%;
    height: 50px;
    display: flex;
  }
  & .Dashboard__SaasData-chart {
    width: 100%;
    height: calc(400px - 50px);
  }

  & .Dashboard__SaasData-header-title {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 10px;
    font-size: 17px;
  }
  & .Dashboard__SaasData-header-date {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-end;
    padding-right: 10px;
  }

  & .Dashboard__transactions {
    height: 455px;
    width: 100%;
    border-radius: ${(p) => p.theme.rounded.sm};
    background-color: ${`var(--bg-primary-A)`};
    ${bgTransition}
    margin-top: 10px;
  }

  & .Dashboard__footer {
    width: 100%;
    height: 40px;
    margin-top: 50px;
    ${flexCenter}
  }
  /*  */
`
