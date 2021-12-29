import styled, { css } from "styled-components"

const styled1 = css`
  /*  */
  display: flex;

  & .staticsCardStyled__content {
    width: 50%;
    height: 100%;
  }

  & .staticsCardStyled__statics {
    /* border: 1px solid black; */
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .staticsCardStyled__title {
    width: 100%;
    height: 30px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .staticsCardStyled__value {
    width: 100%;
    height: 40px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
  & .staticsCardStyled__tag {
    width: 100%;
    height: 30px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .staticsCardStyled__icon {
    display: flex;
    margin-left: 5px;
  }

  & .staticsCardStyled__iconValue {
    display: flex;
    margin-right: 5px;
  }
  /*  */
`

const Styled2 = css`
  /*  */
  & .staticsCardStyled__content {
    width: 100%;
    height: 50px;
    display: flex;
  }

  & .staticsCardStyled__statics {
    width: 100%;
    height: 50px;
  }

  & .staticsCardStyled__title {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .staticsCardStyled__icon {
    display: flex;
    margin-left: 5px;
  }

  & .staticsCardStyled__value {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
  /*  */
`

export const S_StaticsCard = styled.div<any>`
  /*  */
  height: 100px;
  border-radius: ${(p) => p.theme.rounded.sm};
  background-color: var(--bg-primary);
  box-shadow: 1px 1px 1px 1px var(--bg-primary);
  transition: background-color 0.3s ease-in, color 0.3s ease-in, box-shadow 0.3s ease-in;

  width: 100%;
  margin-top: 5px;

  @media (min-width: ${(p) => p.theme.mediaQuery.tablet}) {
    width: 49.5%;
    margin-top: 5px;
  }

  @media (min-width: ${(p) => p.theme.mediaQuery.laptop}) {
    width: 24.5%;
    margin-top: 0px;
  }

  ${(p) => {
    const { cardStyle } = p
    switch (cardStyle) {
      case "style-1":
        return styled1
        break

      case "style-2":
        return Styled2

      default:
        return styled1
        break
    }
  }}/*  */
`

export const S_StaticsCardContainer = styled.div`
  /*  */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /*  */
`

S_StaticsCard.displayName = "StaticsCard"

S_StaticsCardContainer.displayName = "StaticsCardContainer"
