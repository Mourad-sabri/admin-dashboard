import { CSSProperties } from "react"
import { DropzoneOptions } from "react-dropzone"

export interface DropZoneFile extends File {
  preview: string
}

export interface DropZoneProps extends DropzoneOptions {
  onChange?: (imgs: File[]) => void
  title?: string
  height?: number
  className?: string
  style?: CSSProperties
  name?: string
  label?: string
}

export interface DropZoneStyleProps extends DropZoneProps {
  isDragAccept?: boolean
  isDragActive?: boolean
  isDragReject?: boolean
}
