import { DraftEditorCommand, DraftHandleValue, EditorState } from "draft-js"
import { CSSProperties } from "react"

interface mentionTextEditorProps {
  text: string
  value: string
  link?: string
}

export interface TextEditorProps {
  onChange?: (value: string) => void
  name?: string
  className?: string
  style?: CSSProperties
  wrapperClassName?: string
  editorClassName?: string
  toolbarClassName?: string
  placeholder?: string
  handlePastedText?: (text: string, html: string, editorState: EditorState, onChange: (editorState: EditorState) => void) => boolean
  handleKeyCommand?: (command: DraftEditorCommand, editorState: EditorState, eventTimeStamp: number) => DraftHandleValue
  value?: string /// html string
  hashtag?: boolean
  mention?: boolean
  mentionSuggestions?: mentionTextEditorProps[]
}
