import { internet } from "faker"
import React, { useMemo } from "react"
import { CreditCard, InfoCircle, Lock, Person, Tools } from "react-bootstrap-icons"
import Avatar from "../../core/Avatar/Avatar"
import Divider from "../../core/Dividers/Divider"
import DropDown from "../../core/DropDown/DropDown"
import DropDownItem from "../../core/DropDown/DropDownItem"

const AccountAvatar = () => {
  const src = useMemo(() => internet.avatar(), [])

  return (
    <DropDown components={<Avatar src={src} size="sm" />}>
      <DropDownItem icon={<Person />}>Profile</DropDownItem>
      <DropDownItem icon={<CreditCard />}> Payouts </DropDownItem>
      <DropDownItem icon={<InfoCircle />}> Support </DropDownItem>
      <Divider title="Account" />
      <DropDownItem icon={<Tools />}> Settings </DropDownItem>
      <DropDownItem icon={<Lock />}> Log Out </DropDownItem>
    </DropDown>
  )
}

export default AccountAvatar
