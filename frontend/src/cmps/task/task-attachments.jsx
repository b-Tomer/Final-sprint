import { useEffect, useState } from 'react'
import { ReactComponent as Attachments } from '../../assets/img/icons/attachment.svg'
import { updateTask } from '../../store/task.actions'
import { DynamicCmp } from '../dynamic-cmp/dynamic-cmp'
import { store } from '../../store/store'
import { OPEN_DYN_MODAL } from '../../store/system.reducer'

export function TaskAttachments({ task, boardId, groupId }) {

  const [currTask, setCurrTask] = useState(task)
  const [dynamicCmpName, setDynamicCmpName] = useState(null)



  useEffect(() => {
    setCurrTask(task)
  }, [task])

  async function onDeleteAttachment(attachment) {
    const updatedStyle = { ...task.style }
    if (updatedStyle?.backgroundImage === attachment.url) {
      updatedStyle.backgroundImage = null
    }

    const updatedAttachments = task.attachments.filter(
      (att) => att.id !== attachment.id
    )

    const updatedTask = {
      ...task,
      style: updatedStyle,
      attachments: updatedAttachments,
    }

    setCurrTask(updatedTask);
    await updateTask(boardId, groupId, updatedTask);
  }

  function onToggleTaskCover(attachment) {
    const updatedStyle = { ...task.style }
    if (updatedStyle?.backgroundImage === attachment.url) {
      updatedStyle.backgroundImage = null
    } else {
      updatedStyle.backgroundImage = attachment.url
      updatedStyle.bgColor = null
    }
    const updatedTask = { ...task, style: updatedStyle }
    setCurrTask(updatedTask)
    console.log("task from cpm: ", updatedTask)
    updateTask(boardId, groupId, updatedTask)
  }


  // function onEditAttachment(atc) {
  //   store.dispatch({type: OPEN_DYN_MODAL})
  //   setIsEditOpen(true)
  // }

  function onEditAttachment(name,atc) {
    setDynamicCmpName(name)
    store.dispatch({ type: OPEN_DYN_MODAL })
}


  if (!task.attachments) return ''

  return (
    <section className='attachments'>
      <div className="description-title">
        <Attachments className="task-content-icon" />
        <h3>Attachments</h3>
      </div>
      {currTask.attachments.map(atc => (<div key={atc.id} className='attachment-container'>
        <div className='attachment-image'>
          <img src={atc.url} />
        </div>
        <div className='attachment-content'>
          <span className='attachment-title'>{atc.url?.split('/').pop()}</span>
          <span>Added at {atc.createdAt}</span>
          <span className='small-dots'>&#x2022;</span><span className='attachment-btns'>Comment</span>
          <span className='small-dots'>&#x2022;</span><span onClick={() => onDeleteAttachment(atc)} className='attachment-btns'>Delete</span>
          <span className='small-dots'>&#x2022;</span><span onClick={() => onEditAttachment('Edit attachment',atc)} className='attachment-btns'>Edit</span>
          <span className="attachment-btns">
            <span onClick={() => onToggleTaskCover(atc)} className="toggle-attachment-cover">
              {task.style?.backgroundImg === atc.url
                ? 'Remove cover'
                : 'Make cover'}
            </span>
          </span>
        </div>
      </div>
      ))}
          {dynamicCmpName && (
                <DynamicCmp
                    task={task}
                    title={dynamicCmpName}
                  
                />
            )}
    </section>
  )
}



