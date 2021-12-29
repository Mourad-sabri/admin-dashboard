export interface AccordionProps {
  // pass the content
  content?: JSX.Element | JSX.Element[] | string
  // accordion icon
  icon?: JSX.Element
  // accordion title
  title?: string | JSX.Element
  // pass the content as children
  children?: JSX.Element | JSX.Element[] | string
}
