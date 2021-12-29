import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons"
import Button from "../../core/Buttons/Button"

const Footer = () => {
  return (
    <div className="landingPage__footer">
      <div className="landingPage__copyRight">Asmaa all rights reserved © 2021</div>
      <div className="landingPage__socialNetwork-btns">
        <Button icon={<Facebook />} size="sm" intent="primary" variant="text" />
        <Button icon={<Instagram />} size="sm" intent="primary" variant="text" />
        <Button icon={<Twitter />} size="sm" intent="primary" variant="text" />
        <Button icon={<Youtube />} size="sm" intent="primary" variant="text" />
      </div>
    </div>
  )
}

export default Footer
