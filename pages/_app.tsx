import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { BaseTheme } from "../styles/BaseTheme"
import { GlobalStyle } from "../styles/GlobalStyle"
import ThemeModeProvider from "../admin/theme/ThemeProvider"
import type { NextPage } from "next"
import { ReactElement, ReactNode } from "react"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={BaseTheme}>
      <GlobalStyle />
      <ThemeModeProvider>
        {/*  */}
        {getLayout(<Component {...pageProps} data="test" />)}
        {/*  */}
      </ThemeModeProvider>
    </ThemeProvider>
  )
}
export default MyApp
