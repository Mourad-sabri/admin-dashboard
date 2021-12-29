import ProgressBar from "../../../../core/ProgressBar/ProgressBar"

export const WorkProgress = () => {
  return (
    <div className="Dashboard__workProgress">
      <div className="Dashboard__workProgress-header"> Team Work Progress </div>
      <div className="Dashboard__workProgress-progressBar">
        <ProgressBar percent={70} intent="secondary" />
      </div>
    </div>
  )
}
