import { S_StaticsCardContainer } from "./staticsCard.styled"

export const StaticsCardContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <S_StaticsCardContainer> {children} </S_StaticsCardContainer>
}
