import { useState } from "react"
import { Clipboard, CodeSlash, Mic } from "react-bootstrap-icons"
import Button from "../admin/core/Buttons/Button"
import { S_Helpers } from "./helpers.styled"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import { useClipBoard } from "../admin/hooks/useClipBoard/useClipBoard"
import Tooltip from "../admin/core/Tooltip/Tooltip"
import ElementToString from "react-element-to-jsx-string"
import DataTable from "../admin/core/Table/Table"

interface ComponentsDocsProps {
  children?: JSX.Element | string
  code?: string
  title?: string
  renderCode?: (code: string) => string
}

interface ComponentsApiProps {
  title?: JSX.Element | string
  api?: any[]
}

export const ComponentsDocs = (props: ComponentsDocsProps) => {
  const { children, code, title, renderCode } = props
  const [show, setShow] = useState(false)

  const ElementRef = useClipBoard({
    text: () =>
      renderCode
        ? renderCode(
            ElementToString(children, {
              showFunctions: true,
            })
          )
        : ElementToString(children, {
            showFunctions: true,
          }),
  })

  return (
    <S_Helpers>
      <div className="helpers__header">
        <div className="helpers__title"> {title} </div>
        <div className="helpers__btns">
          <Tooltip content={`show ${show ? "jsx" : "components"}`}>
            <Button icon={<CodeSlash />} variant="text" size="sm" onClick={() => setShow(!show)} />
          </Tooltip>
          <Tooltip content="copy to clipboard">
            <Button icon={<Clipboard />} variant="text" size="sm" ref={ElementRef} />
          </Tooltip>
        </div>
      </div>
      <div className="helpers__content">
        {show ? (
          <SyntaxHighlighter language="jsx" showLineNumbers style={style}>
            {renderCode
              ? renderCode(
                  ElementToString(children, {
                    showFunctions: true,
                  })
                )
              : ElementToString(children, {
                  showFunctions: true,
                })}
          </SyntaxHighlighter>
        ) : (
          children
        )}
      </div>
    </S_Helpers>
  )
}

const columns = [
  { Header: "API", accessor: "title" },
  { Header: "value", accessor: "value" },
  { Header: "default", accessor: "default" },
]

export function ComponentsApi(props: ComponentsApiProps) {
  const { api = [] } = props
  return (
    <S_Helpers>
      <DataTable data={api} columns={columns} width="300px" />
    </S_Helpers>
  )
}
