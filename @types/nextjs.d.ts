import { NextPage } from "next"
import { AppComponent, AppProps } from "next/dist/shared/lib/router/router"
import { ReactElement, ReactNode } from "react"

export type NextPageWithLayout = NextPage & {
  getLayout: (page?: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type DocumentPropsWithLayout = AppComponent & {
  getLayout?: (page?: ReactElement) => ReactNode
}
