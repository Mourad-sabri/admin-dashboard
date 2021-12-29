import React from "react"
import { ComposableMapProps, GeographiesProps, GeographyProps, ZoomableGroupProps } from "react-simple-maps"
import { MapMarkerProps } from "./tools/mapMarker.types"

export interface GeoMapProps {
  setContent?: React.Dispatch<React.SetStateAction<string | undefined>> /// pass tooltip content: ;
  MapMarker?: React.ReactElement // pass MapMarker Component
  composableMapProps?: ComposableMapProps
  zoomableGroup?: ZoomableGroupProps
  geographiesProps?: GeographiesProps
  geographyProps?: GeographyProps
}
