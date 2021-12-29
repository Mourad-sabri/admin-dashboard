export const LandingPageCardRight = ({ children, img }: { children: string; img: string }) => {
  return (
    <div className="landingPage__cards">
      <div className="landingPage__content">{children}</div>
      <div className="landingPage__imgCard">
        <img src={img} className="img" />
      </div>
    </div>
  )
}

export const LandingPageCardLeft = ({ children, img }: { children: string; img: string }) => {
  return (
    <div className="landingPage__cards flex-direction">
      <div className="landingPage__imgCard">
        <img src={img} className="img" />
      </div>
      <div className="landingPage__content">{children}</div>
    </div>
  )
}
