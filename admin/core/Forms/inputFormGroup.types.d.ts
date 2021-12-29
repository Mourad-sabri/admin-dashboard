import { FormikConfig } from "formik"
import { CSSProperties } from "react"
import { InputProps } from "../Inputs/inputs.types"
import { TextEditorProps } from "../TextEditor/textEditor.types"

export interface InputFormGroupProps extends InputProps {
  label?: string // pass label
}

export interface FormGroupProps extends FormikConfig<any> {
  children: JSX.Element | JSX.Element[] // pass inputs
  className?: string
  style?: CSSProperties
}

export interface TextEditorGroupProps extends TextEditorProps {
  label?: string
}
