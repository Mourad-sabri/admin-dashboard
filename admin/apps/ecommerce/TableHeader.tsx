import { Fragment, useState } from "react"
import { InfoCircle, Search, ThreeDotsVertical, Trash, Upload } from "react-bootstrap-icons"
import { TableInstance } from "react-table"
import Button from "../../core/Buttons/Button"
import Input from "../../core/Inputs/BaseInput"
import Tooltip from "../../core/Tooltip/Tooltip"
import { S_TableHeader } from "./ecommerceApps.styled"
import { useRouter } from "next/router"

export const DataTableHeader = (props: TableInstance) => {
  //
  const { preGlobalFilteredRows, setGlobalFilter, selectedFlatRows } = props

  const [value, setValue] = useState<string>("")

  const { push } = useRouter()

  const count = preGlobalFilteredRows.length

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setGlobalFilter(e.target.value)
  }

  return (
    <S_TableHeader>
      <div className="selectedRows">
        {selectedFlatRows.length > 0 && (
          <Fragment>
            <Button intent="error" size="sm" icon={<Trash />} />
            <Button intent="primary" size="sm" icon={<InfoCircle />} />
            <Button intent="primary" size="sm" icon={<ThreeDotsVertical />} />
          </Fragment>
        )}
      </div>

      <div className="btns">
        <Tooltip
          content={
            <Input
              placeholder={`search in ${count} products...`}
              onChange={handleChange}
              value={value || ""}
              style={{ backgroundColor: "var(--bg-primary)", width: 200 }}
            />
          }
          interactive
          trigger="click"
          placement="left"
          padding="0"
        >
          <Button icon={<Search />} size="sm" intent="success" />
        </Tooltip>
        <Button size="sm" intent="success" icon={<Upload />} />
        <Button size="sm" intent="success" onClick={() => push("/apps/ecommerce/add-product")}>
          Add Product
        </Button>
      </div>
    </S_TableHeader>
  )
}
