import React from "react"
import { FaqsProps } from "./faq.types"

export const Faq = (props: FaqsProps) => {
  return (
    <div className="faq__item">
      <div className="faq__title"> {props.title} </div>
      <div className="faq__content">{props.children}</div>
    </div>
  )
}
