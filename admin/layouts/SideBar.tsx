import React, { useCallback } from "react"
import Drawer from "../core/Drawer/Drawer"
import SideBar from "../core/SideBar/SideBar"
import { useMediaQuery } from "../hooks/useMediaQuery/useMediaQuery"
import { items } from "./sideBarItems"

export const SideBarContainer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  ///
  const { sm } = useMediaQuery({
    sm: 767,
  })

  const renderSideBar = useCallback((isOpen?: boolean) => <SideBar items={items} isOpen={isOpen || open} />, [open])

  return (
    <div>
      {!sm ? (
        <Drawer isOpen={open} postion="left" allowClickOutisdeClose onClose={onClose}>
          {renderSideBar(true)}
        </Drawer>
      ) : (
        <> {renderSideBar()} </>
      )}
    </div>
  )
}
