import { CardMap } from "../../../../components/CardMap/CardMap"
import { MapMarker } from "../../../../maps/tools/MapMarker"
import { MapToolTip } from "../../../../maps/tools/ToolTip"

// fake data

const marker = [
  {
    coordinates: [-7.5898434, 33.5731104],
  },
  { coordinates: [-58.3816, -34.6037] },
  { coordinates: [-50.769209, -2.460181] },
  { coordinates: [-1.165328, 15.961329] },
  { coordinates: [-89.818233, 38.822591] },
  { coordinates: [-101.409936, 63.233627] },
]

export const VisitorsMap = () => {
  return (
    <>
      <CardMap className="dashboard__map" MapMarker={<MapMarker markers={marker} />}>
        <MapToolTip />
      </CardMap>
    </>
  )
}
