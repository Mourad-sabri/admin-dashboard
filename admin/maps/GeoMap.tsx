import React, { memo, useState } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { GeoMapProps } from "./geoMap.types"

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

// for more information or docs about react-simple-maps  visit https://github.com/zcreativelabs/react-simple-maps

const GeoMap = (props: GeoMapProps) => {
  const { setContent, MapMarker, composableMapProps, zoomableGroup, geographiesProps, geographyProps } = props

  return (
    <ComposableMap
      data-tip=""
      projectionConfig={{
        scale: 200,
      }}
      style={{
        outline: "none",
      }}
      {...composableMapProps}
    >
      <ZoomableGroup {...zoomableGroup}>
        <Geographies {...geographiesProps} geography={geoUrl}>
          {({ geographies }) => {
            return geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="var(--bg-primary)"
                  onMouseEnter={() => {
                    if (setContent) {
                      setContent(geo.properties.NAME)
                    }
                  }}
                  onMouseLeave={() => {
                    if (setContent) {
                      setContent(undefined)
                    }
                  }}
                  {...geographyProps}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              )
            })
          }}
        </Geographies>
        {MapMarker ? MapMarker : null}
      </ZoomableGroup>
    </ComposableMap>
  )
}

export default memo(GeoMap)
