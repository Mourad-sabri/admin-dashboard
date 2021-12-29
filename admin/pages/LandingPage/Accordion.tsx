import React from "react"
import Accordion from "../../core/Accordion/Accordion"

export const AccordionLandingPage = () => {
  return (
    <div className="landingPage__accordion">
      <Accordion title="which Styling library used in Asmaa">
        we use Styled-component to build every component in asmaa but we use strategy that allow you to use any other styling library or even you can
        use scss or css
      </Accordion>
      <Accordion title="what is next js version used in the template ">11.1.2</Accordion>
      <Accordion title="what is  forms library that you use  ">we use formik library to build forms</Accordion>
      <Accordion title="is Asmaa built using typescript"> yes </Accordion>
    </div>
  )
}
