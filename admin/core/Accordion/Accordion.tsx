import { useState, forwardRef, Ref } from "react"
import { ChevronDown } from "react-bootstrap-icons"
import { S_Accordion } from "./accordion.styled"
import { AccordionProps } from "./accordion.types"
import { UnmountClosed } from "react-collapse"

const Accordion = forwardRef((props: AccordionProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { title, icon, content, children } = props

  const [showContent, setShowContent] = useState<boolean>(false)

  function toggleShowContent() {
    setShowContent(!showContent)
  }

  return (
    <S_Accordion ref={ref}>
      <div className="accordionStyled__toggleButton" onClick={toggleShowContent}>
        {icon && <span className="accordionStyled__icon">{icon}</span>}
        {title && <h4 className="accordionStyled__title"> {title} </h4>}
        <span className="accordionStyled__icon">
          <ChevronDown />
        </span>
      </div>
      {/*  */}
      <UnmountClosed isOpened={showContent}>
        <div className="accordionStyled__content">{children || content}</div>
      </UnmountClosed>
      {/*  */}
    </S_Accordion>
  )
})

Accordion.displayName = "Accordion"

export default Accordion
