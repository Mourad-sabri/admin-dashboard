import { ChevronDown, List, Lock, Person, Sun } from "react-bootstrap-icons"
import Button from "../../core/Buttons/Button"
import { useModeTheme } from "../../hooks/useModeTheme/useModeTheme"
import { useRouter } from "next/router"
import DropDownItem from "../../core/DropDown/DropDownItem"
import DropDown from "../../core/DropDown/DropDown"

export const LandingPageNavBar = () => {
  const { togglethemeMode, themeMode } = useModeTheme()

  const { push } = useRouter()

  return (
    <nav className="landingPage__nav">
      <div className="landingPage__nav-toggleBtn">
        <Button
          icon={<List />}
          size="lg"
          variant="text"
          style={{
            fontSize: 27,
          }}
        />
      </div>
      <div className="landingPage__nav-logo">
        {/* <img src={themeMode === "light" ? "/logo-light-mode.png" : "/logo-dark-mode.png"} /> */}
        <div className="logo"> Asmaa </div>
      </div>
      <div className="landingPage__nav-links">
        <DropDown
          components={
            <Button size="sm" rigthIcon={<ChevronDown />} variant="text">
              Dashboards
            </Button>
          }
        >
          <DropDownItem href="/dashboards/ecommerce"> E-Commerce </DropDownItem>
          <DropDownItem href="/dashboards/analytics"> Analytics </DropDownItem>
          <DropDownItem href="/dashboards/saas"> Sass </DropDownItem>
        </DropDown>

        <Button size="sm" rigthIcon={<ChevronDown />} variant="text">
          Pages
        </Button>

        <Button size="sm" rigthIcon={<ChevronDown />} variant="text">
          Components
        </Button>
        <Button size="sm" rigthIcon={<ChevronDown />} variant="text">
          Asmaa
        </Button>
      </div>
      <div className="landingPage__nav-btns">
        <Button variant="outlined" icon={<Lock />} size="sm" intent="secondary" onClick={() => push("/auth/login-2")}>
          Log In
        </Button>
        <Button variant="outlined" icon={<Person />} size="sm" intent="secondary" onClick={() => push("/auth/register-2")}>
          Register
        </Button>
        <Button variant="outlined" size="sm" intent="secondary" icon={<Sun />} onClick={togglethemeMode} />
      </div>
    </nav>
  )
}
