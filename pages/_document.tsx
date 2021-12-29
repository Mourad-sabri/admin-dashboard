import { AppComponent, AppProps } from "next/dist/shared/lib/router/router"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
import { DocumentPropsWithLayout } from "../@types/nextjs"

export default class MyDocument extends Document<any> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App: DocumentPropsWithLayout) => (props: AppProps) => {
      return sheet.collectStyles(App.getLayout ? App.getLayout() : <App {...props} />)
    })
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }
  render() {
    return (
      <Html data-theme="light">
        <Head>
          {this.props.styleTags}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap" rel="stylesheet" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            const isClientSide = ()=> typeof window !== "undefined" ? true : false
                  if (isClientSide()) {
                  const getThemeMode =  localStorage.getItem("data-theme")
                  if (getThemeMode) {  
                   document.querySelector('html')?.setAttribute('data-theme',getThemeMode)
                  }
                  else if(isDark) {
                    document.querySelector('html')?.setAttribute('data-theme',"dark")
                    localStorage.setItem("data-theme", "dark")
                  }
                  else {
                    document.querySelector('html')?.setAttribute('data-theme',"light")
                    localStorage.setItem("data-theme", "light")
                  }
                 }
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal" />
          <div id="tooltip" />
          <div id="drawer" />
          <div id="toast" />
          <div id="test" />
        </body>
      </Html>
    )
  }
}
