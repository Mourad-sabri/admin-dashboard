import { List } from "../../../../components/List/List"
import Button from "../../../../core/Buttons/Button"

// fake data

const data = [
  {
    name: "Load Balancer",
    value: "unInstall",
    renderValue: (value: string) => (
      <Button intent="error" size="sm">
        {value}
      </Button>
    ),
  },
  {
    name: "DNS Manager",
    value: "unInstall",
    renderValue: (value: string) => (
      <Button intent="error" size="sm">
        {value}
      </Button>
    ),
  },
  {
    name: "FireWall",
    value: "unInstall",
    renderValue: (value: string) => (
      <Button intent="error" size="sm">
        {value}
      </Button>
    ),
  },
  {
    name: "Floating IP",
    value: "unInstall",
    renderValue: (value: string) => (
      <Button intent="error" size="sm">
        {value}
      </Button>
    ),
  },
  {
    name: "Database Manager",
    value: "unInstall",
    renderValue: (value: string) => (
      <Button intent="error" size="sm">
        {value}
      </Button>
    ),
  },
  {
    name: "VPN",
    value: "unInstall",
    renderValue: (value: string) => (
      <Button intent="error" size="sm">
        {value}
      </Button>
    ),
  },
]
export const InstalledApps = () => {
  return (
    <div className="dashboard__installedApps">
      <List data={data} name="Installed Apps" displayShowMore />
    </div>
  )
}
