import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"
import { AccordionProps } from "./accordion.types"

export const S_Accordion = styled.div<AccordionProps>`
  /*  */
  width: 100%;
  min-height: 40px;
  margin-top: 3px;

  & .accordionStyled__toggleButton {
    width: 100%;
    height: 40px;
    border-radius: ${(p) => p.theme.rounded.sm};
    display: flex;
    background-color: var(--bg-secondary);
    user-select: none;
  }

  & .accordionStyled__icon {
    width: 30px;
    ${flexCenter}
    height: 100%;
    flex-shrink: 0;
  }

  & .accordionStyled__title {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 6px;
  }

  & .accordionStyled__content {
    min-height: 30px;
    margin-top: 5px;
    background-color: var(--bg-primary);
    padding: 5px;
    border-radius: ${(p) => p.theme.rounded.sm};
  }

  & .ReactCollapse--collapse {
    transition: height 200ms;
  }
  /*  */
`

S_Accordion.displayName = "AccordionStyled"
