import React, { useState } from "react"
import { EditorState, convertToRaw, ContentState } from "draft-js"
import draftToHtml from "draftjs-to-html"
import dynamic from "next/dynamic"
import { EditorProps } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { S_TextEditor } from "./textEditor.styled"
import { TextEditorProps } from "./textEditor.types"
import htmlToDraft from "html-to-draftjs"

const Editor = dynamic<EditorProps>(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), { ssr: false })

export const TextEditor = (props: TextEditorProps) => {
  // props
  const { onChange, className, name, style, value, wrapperClassName, editorClassName, toolbarClassName, placeholder } = props
  const { handlePastedText, handleKeyCommand, hashtag, mention, mentionSuggestions = [] } = props
  const contentBlock = htmlToDraft(value || "")
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
  const editorStateWithValue = EditorState.createWithContent(contentState)
  const [editorState, setEditorState] = useState(value ? editorStateWithValue : EditorState.createEmpty())
  const handleChange = (editorState: EditorState) => {
    if (onChange) {
      onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }

    setEditorState(editorState)
  }
  return (
    <S_TextEditor className={className} style={style}>
      <Editor
        editorState={editorState}
        wrapperClassName={`editorStyled-wrapper ${wrapperClassName}`}
        editorClassName={`editorStyled__editor ${editorClassName}`}
        toolbarClassName={`editorStyled__toolbar ${toolbarClassName}`}
        hashtag={
          hashtag
            ? {
                separator: " ",
                trigger: "#",
              }
            : undefined
        }
        mention={
          mention
            ? {
                separator: " ",
                trigger: "@",
                suggestions: mentionSuggestions,
              }
            : undefined
        }
        onEditorStateChange={handleChange}
        toolbar={{
          inline: {
            bold: { className: "editorStyled__btn" },
            italic: { className: "editorStyled__btn" },
            underline: { className: "editorStyled__btn" },
            strikethrough: { className: "editorStyled__btn" },
            monospace: { className: "editorStyled__btn" },
            superscript: { className: "editorStyled__btn" },
            subscript: { className: "editorStyled__btn" },
          },
          blockType: { className: "editorStyled__select", dropdownClassName: "editorStyled__options" },
          fontSize: { className: "editorStyled__select", dropdownClassName: "editorStyled__options" },
          fontFamily: { className: "editorStyled__select", dropdownClassName: "editorStyled__options" },
          list: {
            unordered: { className: "editorStyled__btn" },
            ordered: { className: "editorStyled__btn" },
            indent: { className: "editorStyled__btn" },
            outdent: { className: "editorStyled__btn" },
          },
          textAlign: {
            left: { className: "editorStyled__btn" },
            right: { className: "editorStyled__btn" },
            center: { className: "editorStyled__btn" },
            justify: { className: "editorStyled__btn" },
          },
          colorPicker: {
            className: "editorStyled__btn",

            popupClassName: "editorStyled__colorPopup",
          },
          link: {
            link: { className: "editorStyled__btn" },
            unlink: { className: "editorStyled__btn" },
            popupClassName: "editorStyled__linkPopup",
          },
          emoji: {
            className: "editorStyled__btn",
            popupClassName: "editorStyled__colorPopup",
          },
          embedded: {
            className: "editorStyled__btn",
            popupClassName: "editorStyled__colorPopup",
          },
          image: {
            className: "editorStyled__btn",
            popupClassName: "editorStyled__colorPopup",
          },
          remove: { className: "editorStyled__btn" },
          history: {
            undo: { className: "editorStyled__btn" },
            redo: { className: "editorStyled__btn" },
          },
        }}
        placeholder={placeholder}
        handlePastedText={handlePastedText}
        handleKeyCommand={handleKeyCommand}
      />
    </S_TextEditor>
  )
}
