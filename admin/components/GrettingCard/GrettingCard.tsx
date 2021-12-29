import React from "react"

import { S_GrettingCard } from "./grettingCard.styled"
import { GrettingCardProps } from "./grettingCard.types"

export const GrettingCard = (props: GrettingCardProps) => {
  const { children, name } = props
  return (
    <S_GrettingCard>
      <div className="grettingCard__greeting">Good Mornning , {name}</div>
      {children}
    </S_GrettingCard>
  )
}
