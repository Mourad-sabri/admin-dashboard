import { CSSProperties, ReactElement } from "react"
import { GeoMapProps } from "../../maps/geoMap.types"

export interface CardMapProps extends GeoMapProps {
  children?: ReactElement
  MapMarker?: ReactElement
  className?: string
  style?: CSSProperties
}
