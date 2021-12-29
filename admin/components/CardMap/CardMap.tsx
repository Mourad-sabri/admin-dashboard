import { cloneElement, useState } from "react"
import GeoMap from "../../maps/GeoMap"
import { S_CardMap } from "./cardMap.styled"
import { CardMapProps } from "./cardMap.types"

export const CardMap = (props: CardMapProps) => {
  const { children, MapMarker, className, style } = props
  const [content, setContent] = useState<string | undefined>(undefined)
  return (
    <S_CardMap className={className} style={style}>
      <GeoMap setContent={setContent} MapMarker={MapMarker} {...props} />
      {children && cloneElement(children, { content })}
    </S_CardMap>
  )
}
