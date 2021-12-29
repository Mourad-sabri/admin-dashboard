import styled from "styled-components"
import { bgTransition, flexCenter } from "../../../../styles/styles"

export const S_AnalyticsPage = styled.div`
  /*  */
  & .dashboard__usedApps {
    width: 100%;
    height: 515px;
    margin-top: 10px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
    ${bgTransition}
  }

  & .dashboard__usedApps-header {
    width: 100%;
    height: 50px;
    display: flex;
  }

  & .dashboard__usedApps-header-title {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 10px;
    font-size: 20px;
  }
  & .dashboard__usedApps-header-date {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-end;
    padding-right: 10px;
  }

  & .dashboard__usedApps-chart {
    width: 100%;
    height: calc(515px - 50px);
  }

  & .tabsContainerStyled__Tabs.tabsContainerStyled__Tabs {
    background-color: transparent;
  }

  & .dashboard__resourceUsage {
    width: 100%;
    min-height: 270px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & .dashboard__resourceUsage-card {
    width: 100%;
    height: 270px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
    margin-top: 10px;
    ${bgTransition}
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: 49.5%;
      margin-top: 10;
    }
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: 24.5%;
      margin-top: 0;
    }
  }

  & .dashboard__resourceUsage-card-header {
    width: 100%;
    height: 50px;
    display: flex;
  }

  & .dashboard__resourceUsage-card-header-title {
    width: calc(100% - 50px);
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 20px;
  }

  & .dashboard__resourceUsage-card-header-dropdown {
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
  }

  & .dashboard__resourceUsage-card-progress {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .dashboard__container {
    width: 100%;
    min-height: 350px;
    border-radius: ${(p) => p.theme.rounded.sm};
    margin-top: 10px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
  }

  & .dashboard__table {
    width: 100%;
    height: 100%;
    ${bgTransition}
    background-color: var(--bg-primary);

    border-radius: ${(p) => p.theme.rounded.sm};
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: calc(100% - 500px);
    }
  }

  & .dashboard__tableFooter {
    width: 100%;
    height: 30px;
    background-color: var(--bg-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    :hover {
      text-decoration: underline;
    }
    border-bottom-left-radius: ${(p) => p.theme.rounded.sm};
    border-bottom-right-radius: ${(p) => p.theme.rounded.sm};
  }

  & .dashboard__installedApps {
    width: 100%;
    height: 350px;
    margin-top: 10px;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: 390px;
      margin-top: 5px;
    }
  }

  & .listStyled__nameContainer.listStyled__nameContainer {
    border: none;
  }

  & .dashboard__LoadBalancer {
    width: 100%;
    height: 444px;
    ${bgTransition}
    background-color: var(--bg-primary);
    margin-top: 10px;
    border-radius: ${(p) => p.theme.rounded.sm};
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: 490px;
      margin-top: 0px;
    }
  }

  & .dashboard__LoadBalancer-header {
    width: 100%;
    height: 50px;
    ${flexCenter}
    font-size: 20px;
  }
  & .dashboard__LoadBalancer-chart {
    width: 100%;
    height: calc(444px - 50px);
    ${flexCenter}
  }

  & .dashboard__trafficChart {
    width: 100%;
    height: 350px;

    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: calc(100% - 400px);
    }
  }

  & .dashboard__footer {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    ${flexCenter}
  }
  /*  */
`
