import { useSelector } from 'react-redux'
import { ReactComponent as Plus } from '../../assets/img/icons/plus.svg'
import { CLOSE_DYN_ALL_MODALS, OPEN_DYN_LABEL_MODAL, OPEN_DYN_MODAL, SET_MODAL_TITLE } from '../../store/system.reducer'
import { DynamicCmp } from '../dynamic-cmp/dynamic-cmp'
import { store } from '../../store/store'

export function LabelsPreview({ task }) {

  const { board } = useSelector((storeState) => storeState.boardModule)
  const { isOpenLabelModal } = useSelector((storeState) => storeState.systemModule)

  function getLabel(labelId) {
    if (!board.labels) return
    const matchedLabel = board.labels.find(
      (label) => label.id === labelId
    )
    return matchedLabel
  }


  function onOpenLabelModal() {
    store.dispatch({ type: SET_MODAL_TITLE, title: 'Labels' })
    store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
    store.dispatch({ type: OPEN_DYN_MODAL })
    store.dispatch({ type: OPEN_DYN_LABEL_MODAL })
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
            < button onClick={onOpenLabelModal} key={labelId} className='label-button' style={{
              backgroundColor: label.color,
            }} >
              {label.title}
            </button>
          )
        })}

        <div onClick={onOpenLabelModal} className='add-label-icon'><Plus className='plus-icon' /> </div>
      </div>
      {isOpenLabelModal && <DynamicCmp task={task} title='Edit attachment' />}
    </div>
  )
}
