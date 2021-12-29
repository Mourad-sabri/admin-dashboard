import { Chat, List, Shop, Sun, SunFill } from "react-bootstrap-icons"
import Badge from "../core/Badge/Badge"
import Button from "../core/Buttons/Button"
import { useModeTheme } from "../hooks/useModeTheme/useModeTheme"
import AccountAvatar from "./childrens/AccountAvatar"
import { ButtonsList } from "./childrens/ButtonsList"
import { SearchBarContainer } from "./childrens/SearchBar"

export const TopNavBar = ({ handleSideBarToggle }: { handleSideBarToggle: () => void }) => {
  const { togglethemeMode, themeMode } = useModeTheme()

  return (
    <header className="layoutStyled__topNavBar">
      <div className="layoutStyled__sideBarToggleBtn">
        <Button icon={<List />} onClick={handleSideBarToggle} size="sm" />
      </div>
      <div className="layoutStyled__logoContainer">
        <div className="logo"> Asmaa </div>{" "}
        {/* <img src={themeMode === "dark" ? "/logo-dark-mode.png" : "/logo-light-mode.png"} className="layoutStyled__logoContainer-img" /> */}
      </div>
      <div className="layoutStyled__searchBarContainer">
        <SearchBarContainer />
      </div>
      <ButtonsList>
        <Button icon={themeMode === "light" ? <Sun /> : <SunFill />} size="sm" onClick={togglethemeMode} />
        <Badge content="23" top={-6}>
          <Button icon={<Chat />} size="sm" />
        </Badge>
        <Button icon={<Shop />} size="sm" />
      </ButtonsList>
      <div className="layoutStyled__avatar">
        <AccountAvatar />
      </div>
    </header>
  )
}
