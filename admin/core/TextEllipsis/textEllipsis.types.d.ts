import React from "react"

export interface TextEllipsisProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: any
  length?: number
}
