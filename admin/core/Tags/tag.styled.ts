import styled from "styled-components"
import { TagProps } from "./tag.type"

export const S_Tag = styled.div<TagProps>`
  /*  */
  min-width: 30px;
  height: 23px;
  border-radius: ${(p) => p.theme.rounded[p.rounded!]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 7px;
  background-color: ${(p) => (p.intent ? p.theme.colors[p.intent] : " var(--bg-secondary)")};
  color: ${(p) => (p.intent ? "white" : " var(--text-color)")};
  margin-left: 5px;
  & .tagStyled__icon {
    margin-right: 3px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  & .tagStyled__removeIcon {
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      opacity: 70%;
    }
  }
  /*  */
`

S_Tag.displayName = "TagStyled"
