import { ReactElement } from "react"

export const PageContainer = ({ children }: { children?: ReactElement | ReactElement[] }) => {
  return <div className="layoutStyed__pageConatiner"> {children} </div>
}
