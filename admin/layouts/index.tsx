import React, { useState } from "react"
import { S_Layout } from "./layout.styled"
import { LayoutProps } from "./layout.types"
import { PageContainer } from "./PageContainer"
import { SideBarContainer } from "./SideBar"
import { TopNavBar } from "./TopNavBar"

export function Layout(props: LayoutProps) {
  const { children } = props
  const [open, setOpen] = useState(true)

  function handleSideBarToggle() {
    setOpen(!open)
  }

  return (
    <S_Layout>
      <TopNavBar handleSideBarToggle={handleSideBarToggle} />
      <div className="layoutStyled__container">
        <SideBarContainer open={open} onClose={() => setOpen(false)} />
        <PageContainer>{children}</PageContainer>
      </div>
    </S_Layout>
  )
}
