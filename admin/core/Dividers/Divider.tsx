import { forwardRef, Ref } from "react"
import { S_Divider } from "./divider.styled"
import { DividerProps } from "./divider.types"

const Divider = forwardRef((props: DividerProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { title, postiton = "left" } = props
  return (
    <S_Divider postiton="left" {...props} ref={ref}>
      {title && postiton === "left" ? <div className="dividerStyled__title"> {title} </div> : ""}
      <div className="dividerStyled__div"></div>
      {title && postiton === "center" ? <div className="dividerStyled__title"> {title} </div> : ""}
      {title && postiton === "center" ? <div className="dividerStyled__div"></div> : ""}
      {title && postiton === "right" ? <div className="dividerStyled__title"> {title} </div> : ""}
    </S_Divider>
  )
})

export default Divider

Divider.displayName = "Divider"
