import React, { useEffect, useRef } from "react"
import { ChevronDown, List, Lock, Person, Sun } from "react-bootstrap-icons"
import Button from "../admin/core/Buttons/Button"
import { useTypedText } from "../admin/hooks/useTypedText/useTypedText"
import { AccordionLandingPage } from "../admin/pages/LandingPage/Accordion"
import Footer from "../admin/pages/LandingPage/Footer"
import { S_LandingPage } from "../admin/pages/LandingPage/landingPage.styled"
import { LandingPageCardLeft, LandingPageCardRight } from "../admin/pages/LandingPage/LandingPageCard"
import { LogoSlider } from "../admin/pages/LandingPage/LogoSlider"
import { LandingPageNavBar } from "../admin/pages/LandingPage/NavBar"

const Index = () => {
  const ElemntRef = useTypedText<HTMLDivElement>({
    strings: ["Fast !", "Responsive !", "Affordable !", "customizable !"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    backDelay: 1000,
  })

  return (
    <S_LandingPage>
      <div className="landingPage__container">
        <LandingPageNavBar />
        <div className="landingPage__start">
          <div className="landingPage__text">
            <span className="text">
              <span> beautiful Nextjs Template designed To be </span>
              <span ref={ElemntRef} />
              <Button variant="outlined" intent="secondary" style={{ marginTop: 10 }}>
                Buy Now
              </Button>
            </span>
          </div>
          <div className="landingPage__svgContainer">
            <img src="/landing_page.svg" className="landingPage__svg" />
          </div>
        </div>
      </div>
      {/* logos */}
      <LogoSlider />
      <div className="landingPage__features">
        <LandingPageCardRight img="/components.svg">
          Asmaa came with more than 25 reusable ui Components ready to use , just import the component pass the props and that&apos;s it
        </LandingPageCardRight>
        <LandingPageCardLeft img="/programming.svg">
          stay focused on your business and let us take care of design , code maintain , fix bug , keep components up to date ...
        </LandingPageCardLeft>
        <LandingPageCardRight img="/next_js.svg">
          built using the latest technologies styled-components , typescript, formik, react , nextjs , ....
        </LandingPageCardRight>
      </div>
      <AccordionLandingPage />
      <Footer />
    </S_LandingPage>
  )
}

export default Index
