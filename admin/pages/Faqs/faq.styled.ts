import styled from "styled-components"
import { bgTransition, flexCenter } from "../../../styles/styles"

export const S_FaqPage = styled.div`
  width: 100%;
  height: 100%;
  & .faq_container {
    width: 100%;
    min-height: 300px;
    ${bgTransition}
    border-radius: ${(p) => p.theme.rounded.sm};
    ${flexCenter}
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & .faq__item {
    width: 100%;
    min-height: 40px;
    border: 1px solid var(--bg-secondary);
    border-radius: ${(p) => p.theme.rounded.sm};
    margin-top: 10px;
    @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
      width: 49.5%;
    }
  }

  & .faq__title {
    width: 100%;
    height: 40px;
    background-color: var(--bg-secondary);
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 10px;
    border-top-left-radius: ${(p) => p.theme.rounded.sm};
    border-top-right-radius: ${(p) => p.theme.rounded.sm};
  }

  & .faq__content {
    margin-top: 5px;
    padding: 5px;
  }
`
