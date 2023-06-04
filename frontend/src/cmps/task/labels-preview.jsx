import { useSelector } from 'react-redux'
import { ReactComponent as Plus } from '../../assets/img/icons/plus.svg'

export function LabelsPreview({ task }) {

  const { board } = useSelector((storeState) => storeState.boardModule)

  function getLabel(labelId) {
    if (!board.labels) return
    const matchedLabel = board.labels.find(
      (label) => label.id === labelId
    )
    return matchedLabel
  }

  if (!task?.labelIds?.length) return null
  
  return (
    <div className="label-data">
      <h3 className="data-preview-title">Labels</h3>

      <div className="labels">
        {task.labelIds.map((labelId) => {

          const label = getLabel(labelId);
          if (!label) return null;
          return (
            < button key={labelId} className='label-button' style={{
              backgroundColor: label.color,
            }} >
              {label.title}
            </button>
          )
        })}

        <div className='add-label-icon'><Plus className='plus-icon' /> </div>
      </div>


    </div>
  )
}
