import { useEffect, useState } from 'react'
import { ReactComponent as Attachments } from '../../assets/img/icons/attachment.svg'
import { updateTask } from '../../store/task.actions'


export function TaskAttachments({ task, boardId, groupId }) {

    // const [attachments, setAttachments] = useState(null)

    useEffect(() => {
        // setAttachments(task.attachments)
    }, [])


    function onDeleteAttachment(attachment) {
        if (task.style?.backgroundImg === attachment.url) task.style.backgroundImg = null
        const { id } = attachment
        const taskToUpdate = {
            ...task,
            attachments: task.attachments.filter(
                (attachment) => attachment.id !== id
            ),
        }
        updateTask(taskToUpdate, boardId, groupId)
    }

    function onToggleTaskCover(attachment) {
        const taskStyle = task.style
        if (taskStyle) {
            if (taskStyle.backgroundImg === attachment.url) {
                taskStyle.backgroundImg = null
            } else {
                taskStyle.backgroundImg = attachment.url
                taskStyle.bgColor = null
            }
        } else task.style = { backgroundImg: attachment.url }
        const taskToUpdate = {
            ...task,
            style: taskStyle
        }
        updateTask(taskToUpdate, boardId, groupId)

    }

    if (!task.attachments) return ''

    return (
        <section className='attachments'>
            <div className="description-title">
                <Attachments className="task-content-icon" />
                <h3>Attachments</h3>
            </div>
            {task.attachments.map(atc => (<div className='attachment-container'>
                <div className='attachment-image'>
                    <img src={atc.url} alt="" />
                </div>

                <div className='attachment-content'>
                    {atc.url.split('/').pop()}
                </div>
                <span>Comment</span>
                <span>Delete</span>
                <span>Edit</span>
                <span className="attachment-options">
                    <span onClick={onToggleTaskCover} className="toggle-attachment-cover">
                        {task.style?.backgroundImg === atc.url
                            ? 'Remove cover'
                            : 'Make cover'}
                    </span>
                </span>
            </div>))}
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
