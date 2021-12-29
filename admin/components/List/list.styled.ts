import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"

export const S_List = styled.div`
  /*  */
  width: 100%;
  min-height: 300px;
  border: 1px solid var(--bg-secondary);
  border-radius: ${(p) => p.theme.rounded.sm};

  & .listStyled__header {
    width: 100%;
    height: 40px;
    background-color: var(--bg-secondary);
    display: flex;
  }

  & .listStyled__header-title {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 10px;
  }

  & .listStyled__header-value {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-end;
    padding-right: 10px;
  }

  & .listStyled__list {
    width: 100%;
    min-height: 260px;
  }

  & .listStyled__item {
    width: 100%;
    height: 45px;
    display: flex;
    border-bottom: 1px solid var(--bg-secondary);
    cursor: default;
  }

  & .listStyled__nameContainer {
    width: 50%;
    height: 100%;
    /* border-right: 1px solid var(--bg-secondary); */
    display: flex;
  }

  & .listStyled__name {
    width: 100%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 10px;
  }

  & .listStyled__box {
    min-width: 30px;
    height: 100%;
    ${flexCenter}
    padding:  0 3px;
  }

  & .listStyled__value {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-end;
    padding: 0 5px;
  }

  & .listStyled__showMore {
    width: 100%;
    height: 30px;
    ${flexCenter}
    background-color: var(--bg-secondary);
    cursor: default;
    text-decoration: underline;
  }
  /*  */
`

S_List.displayName = "ListStyled"
