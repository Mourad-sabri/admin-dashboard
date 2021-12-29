import React, { Fragment, useEffect, useMemo, useState } from "react"
import { v4 } from "uuid"
import LoadingSpinner from "../../core/LoadingSpinners/CircleLoadingSpinner"
import { S_List } from "./list.styled"
import { ListProps } from "./list.types"

export const List = (props: ListProps) => {
  // props
  const { data, onRowClick, name, valueTitle, renderRow, show, displayShowMore, showMoreProps } = props

  const dataList = useMemo(() => data, [data])

  const [currentList, setList] = useState(show ? data?.slice(0, show) : data)

  const [rest, setRest] = useState(show ? dataList?.slice(currentList?.length) : undefined)

  useEffect(() => {
    setRest(dataList?.slice(currentList?.length))
  }, [data, currentList])

  return (
    <S_List>
      <div className="listStyled__header">
        <div className="listStyled__header-title"> {name} </div>
        <div className="listStyled__header-value"> {valueTitle} </div>
      </div>
      <div className="listStyled__list">
        {currentList?.map((item, index) => {
          return (
            <Fragment key={v4()}>
              {renderRow ? (
                renderRow(item)
              ) : (
                <div className="listStyled__item" onClick={onRowClick ? () => onRowClick(item) : undefined}>
                  <div className="listStyled__nameContainer">
                    {item.renderBox && <div className="listStyled__box"> {item.renderBox(item)} </div>}
                    <div className="listStyled__name">{item.name}</div>
                  </div>
                  <div className="listStyled__value"> {item.renderValue ? item.renderValue(item.value) : item.value} </div>
                </div>
              )}
            </Fragment>
          )
        })}
      </div>
      {displayShowMore ? (
        <div
          onClick={showMoreProps?.onClick ? () => showMoreProps?.onClick!({ currentList: currentList!, rest, setList }) : undefined}
          className="listStyled__showMore"
        >
          {showMoreProps?.isLoading ? <LoadingSpinner width="23" height="23" /> : "showMore"}
        </div>
      ) : null}
    </S_List>
  )
}
