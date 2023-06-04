import { useEffect, useState } from 'react'
import { ReactComponent as Attachments } from '../../assets/img/icons/attachment.svg'
import { updateTask } from '../../store/task.actions'

export function TaskAttachments({ task, boardId, groupId }) {

    const [currTask, setCurrTask] = useState(task)


    useEffect(() => {
        setCurrTask(task)
    }, [task])

    async function onDeleteAttachment(attachment) {
        const updatedStyle = { ...task.style };
        if (updatedStyle?.backgroundImg === attachment.url) {
          updatedStyle.backgroundImg = null;
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
        const updatedStyle = { ...task.style };
      
        if (updatedStyle?.backgroundImg === attachment.url) {
          updatedStyle.backgroundImg = null;
        } else {
          updatedStyle.backgroundImg = attachment.url;
          updatedStyle.bgColor = null;
        }
      
        const updatedTask = { ...task, style: updatedStyle };
      
        updateTask(boardId, groupId, updatedTask);
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
                    <span className='small-dots'>&#x2022;</span><span className='attachment-btns'>Edit</span>
                    <span className="attachment-btns">
                        <span onClick={onToggleTaskCover} className="toggle-attachment-cover">
                            {task.style?.backgroundImg === atc.url
                                ? 'Remove cover'
                                : 'Make cover'}
                        </span>
                    </span>
                </div>
            </div>
            ))}
        </section>
    )
}



// return (
//   <section className="attachment-preview">
//     <a
//       className="attachment-preview-img"
//       style={{ backgroundImage: `url(${attachment.url})` }}
//       href={attachment.url}
//       target={'_blank'}
//       rel="noreferrer"
//     >
//       {' '}
//     </a>
//     <section className="attachment-details">
//       <section className="attachment-name-and-options">
//         <span className="attachment-name">{attachment.name}</span>
//         <span>Added {utilService.timeSince(attachment.createdAt)}</span>
//         <span> - </span>
//         <span onClick={onDeleteAttachment} className="delete-attachment">
//           Delete
//         </span>
//       </section>
//       <span className="attachment-options">
        // <span onClick={onToggleTaskCover} className="make-attachment-cover">
        //   <section className="svg-holder">
        //     <BsSquareHalf
        //       className="icon"
        //       style={{
        //         transform:
        //           'rotate(0.75turn) translateY(-20%) translateX(22%)',
        //       }}
        //     />
        //     {task.style?.backgroundImg === attachment.url
        //       ? 'Remove cover'
        //       : 'Make cover'}
//           </section>
//         </span>
//       </span>
//     </section>
//   </section>
// )
// }
