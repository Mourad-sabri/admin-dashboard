import React, { Children, cloneElement, createContext, useEffect, useState } from "react"

interface ContentThemeMode {
  togglethemeMode: () => void
  themeMode: "dark" | "light"
}

export const ThemeModeContext = createContext<ContentThemeMode>({ togglethemeMode: () => {}, themeMode: "light" })

function getLocalStorageValue(key: string): any {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key)
  }
  return null
}

function setLocalStorageValue(key: string, value: string) {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, value)
  }
}

function updateHtmlAttr(key: string) {
  if (typeof window !== "undefined") {
    document.querySelector("html")?.setAttribute("data-theme", key)
  }
}

const ThemeProvider = ({ children }: any) => {
  const [themeMode, setThemeMode] = useState<"dark" | "light">(getLocalStorageValue("data-theme"))
  function togglethemeMode() {
    const themeMode = getLocalStorageValue("data-theme")
    if (themeMode && themeMode === "dark") {
      updateHtmlAttr("light")
      setLocalStorageValue("data-theme", "light")
      setThemeMode("light")
    } else if (themeMode && themeMode === "light") {
      updateHtmlAttr("dark")
      setLocalStorageValue("data-theme", "dark")
      setThemeMode("dark")
    } else {
      updateHtmlAttr("light")
      setLocalStorageValue("data-theme", "light")
      setThemeMode("light")
    }
  }

  useEffect(() => {
    const isDark = window.matchMedia(`(prefers-color-scheme: dark)`)
    if (isDark) {
      isDark.addEventListener("change", function (e) {
        if (e.matches) {
          setLocalStorageValue("data-theme", "dark")
          updateHtmlAttr("dark")
          setThemeMode("dark")
        } else {
          setLocalStorageValue("data-theme", "light")
          updateHtmlAttr("light")
          setThemeMode("light")
        }
      })
    }
  }, [])

  return (
    <ThemeModeContext.Provider value={{ togglethemeMode, themeMode }}>
      {Children.map(children, (child) => {
        return cloneElement(child, { togglethemeMode })
      })}
    </ThemeModeContext.Provider>
  )
}

export default ThemeProvider
