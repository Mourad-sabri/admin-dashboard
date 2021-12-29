export interface DrawerProps {
  isOpen?: boolean // show the modal
  children?: JSX.Element | JSX.Element[] /// drawer content
  postion?: "top" | "right" | "bottom" | "left" /// position of the drawer
  onClose?: () => void // pass function to close the drawer required if allowClickOutisdeClose is true
  allowClickOutisdeClose?: boolean
}
