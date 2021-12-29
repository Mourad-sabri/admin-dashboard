import React, { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { img, S_DropZone, thumbs, thumbsContainer, thumbsInner } from "./dropZone.styled"
import { DropZoneFile, DropZoneProps } from "./dropZone.types"

const DropZone = (props: DropZoneProps) => {
  const { onChange, title = "drop Images Here", className, style, height } = props
  const [files, setFiles] = useState<DropZoneFile[]>([])

  const { acceptedFiles, getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject } = useDropzone({
    onDrop: (__acceptedFiles) => {
      setFiles(
        __acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
    ...props,
  })

  const thumbsImg = files.map((file: DropZoneFile) => {
    return (
      <div key={file.name} style={thumbs}>
        <div style={thumbsInner}>
          <img src={file.preview} alt="" style={img} />
        </div>
      </div>
    )
  })

  useEffect(() => {
    files.forEach((file: DropZoneFile) => URL.revokeObjectURL(file.preview))

    if (onChange) {
      onChange(acceptedFiles)
    }
  }, [files])

  return (
    <>
      <S_DropZone style={style} className={className} height={height} {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <p>{title}</p>
        <aside style={thumbsContainer}>{thumbsImg}</aside>
      </S_DropZone>
    </>
  )
}

export default DropZone
