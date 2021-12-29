export interface ModalProps {
  children?: JSX.Element | JSX.Element[] // content
  show?: boolean // show modal
  onClose?: () => void // function to close the modal required if clickOutsideClose is true
  clickOutsideClose?: boolean
}
