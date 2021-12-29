import { useContext } from "react"
import { ThemeModeContext } from "../../theme/ThemeProvider"

// simple hook to toggle theme mode

export function useModeTheme() {
  return useContext(ThemeModeContext)
}
