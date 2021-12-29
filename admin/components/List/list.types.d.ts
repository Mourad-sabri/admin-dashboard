import { Dispatch, SetStateAction } from "react"

interface ListSHowMoreProps {
  currentList: any[]
  rest?: any[]
  setList: Dispatch<SetStateAction<any[] | undefined>>
}

export interface ListProps {
  data?: any[]
  onRowClick?: (item?: any) => void
  name?: string | JSX.Element
  valueTitle?: JSX.Element | string
  renderRow?: (item?: any) => JSX.Element
  show?: number
  displayShowMore?: boolean
  showMoreProps?: {
    isLoading?: boolean
    onClick?: (props: ListSHowMoreProps) => void
  }
}
