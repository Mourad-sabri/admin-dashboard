import styled from "styled-components"
import { flexCenter } from "../../../../styles/styles"

export const S_DashboardEcommerce = styled.div`
  /*  */

  & .dashboard__staticsCard {
    margin-top: 10px;
  }

  & .dashboard__alerts {
    margin-top: 5px;
    border: none;
  }

  & .dashboard__container {
    width: 100%;
    min-height: 390px;
    margin-top: 10px;
    ${flexCenter}
    justify-content: space-between;
    flex-wrap: wrap;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      flex-wrap: nowrap;
    }
  }

  & .dashboard__TotalSales {
    width: 100%;
    height: 387px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: calc(100% - 500px);
    }
  }

  & .dashboard__productsStock {
    width: 100%;
    margin-top: 10px;
    height: 100%;
    background-color: var(--bg-primary);
    & .listStyled__name {
      :hover {
        text-decoration: underline;
      }
    }
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: 490px;
      margin-top: 0px;
    }
  }

  & .dashboard__LastOrdersContainer {
    width: 100%;
    height: 454px;
    margin-top: 10px;
  }

  & .dashboard__tableFooter {
    width: 100%;
    height: 40px;
    border: 1px solid var(--bg-secondary);
    border-top: none;
    ${flexCenter}
    background-color: var(--bg-secondary);
    text-decoration: underline;
    cursor: default;
  }

  & .dashboard__ChartContainer {
    width: 100%;
    height: 360px;
    margin-top: 10px;
  }

  & .dashboard__recentPurchases {
    width: 100%;
    min-height: 415px;
    border-radius: ${(p) => p.theme.rounded.sm};
    background-color: var(--bg-primary);
  }

  & .dashboard__visitorsChart {
    width: 100%;
    height: 390px;
    border-radius: ${(p) => p.theme.rounded.sm};
    background-color: var(--bg-primary);
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: 500px;
    }
  }

  & .dashboard__map {
    width: 100%;
    height: 390px;
    margin-top: 10px;
    @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
      width: calc(100% - 510px);
      margin-top: 0px;
    }
  }

  & .dashboard__footer {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*  */
`

S_DashboardEcommerce.displayName = "DashboardStyled"
