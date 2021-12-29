import React from "react"
import { Marker } from "react-simple-maps"
import { MapMarkerProps } from "./mapMarker.types"

export const MapMarker = (props: MapMarkerProps) => {
  const { markers, fill, stroke } = props
  return (
    <>
      {markers.map((m: any) => {
        return (
          <Marker coordinates={m.coordinates}>
            <circle r={10} fill={fill ? fill : "#F53"} stroke={stroke ? stroke : "#fff"} strokeWidth={2} />
          </Marker>
        )
      })}
    </>
  )
}
