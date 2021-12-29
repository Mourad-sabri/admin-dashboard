import { CSSProperties } from "react"
import styled, { css } from "styled-components"
import { DropZoneStyleProps } from "./dropZone.types"

export const thumbsContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
}
export const thumbs: CSSProperties = {
  display: "flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
}

export const thumbsInner: CSSProperties = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
}

export const img: CSSProperties = {
  display: "block",
  width: "auto",
  height: "100%",
}

export const S_DropZone = styled.div<DropZoneStyleProps>`
  height: ${(p) => (p.height ? p.height : 200)}px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px dashed
    ${(p) => {
      const { isDragAccept, isDragActive, isDragReject } = p
      if (isDragActive) {
        return p.theme.colors.primary
      } else if (isDragAccept) {
        return p.theme.colors.success
      } else if (isDragReject) {
        return p.theme.colors.error
      } else {
        return "var(--text-color)"
      }
    }};
  border-radius: ${(p) => p.theme.rounded.sm};
  background-color: var(--bg-primary);
  color: var(--text-color);
  outline: none;
  transition: border 0.42s ease-ease-in-out;
`

S_DropZone.displayName = "DropZoneStyled"
