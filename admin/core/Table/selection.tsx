import { IndeterminateCheckBox } from "./CheckBox"

const selectionRowStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: 20,
  flexShrink: 0,
  paddingRight: 5,
}

export function selectionTable() {
  return {
    id: "Selection",
    Header: ({ getToggleAllRowsSelectedProps }: any) => {
      return (
        <div style={selectionRowStyle}>
          <IndeterminateCheckBox {...getToggleAllRowsSelectedProps()} />
        </div>
      )
    },
    Cell: ({ row }: any) => {
      return (
        <div style={selectionRowStyle}>
          <IndeterminateCheckBox {...row.getToggleRowSelectedProps()} />
        </div>
      )
    },
    width: 30,
    disableSortBy: true,
  }
}
