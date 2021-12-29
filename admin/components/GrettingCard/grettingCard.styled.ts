import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"

export const S_GrettingCard = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: var(--bg-primary);
  border-radius: ${(p) => p.theme.rounded.sm};
  transition: background-color 0.3s ease-in;

  & .grettingCard__greeting {
    width: 100%;
    height: 70px;
    ${flexCenter}
    justify-content: start;
    padding-left: 20px;
    font-size: 20px;
  }
`
