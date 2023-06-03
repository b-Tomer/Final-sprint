import { useParams } from 'react-router-dom'
import { TaskMenu } from './task-menu.jsx'
import { TaskMainDetails } from './task-main-details.jsx'
import { TaskHeader } from './task-header.jsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


export function TaskDetails({ taskId, groupId }) {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [task, setTask] = useState(null)
    const [group, setGroup] = useState(null)
    const groupIdx = board?.groups.findIndex((group) => group.id === groupId)
    const currTask = board.groups[groupIdx].tasks.find(task => task.id === taskId)
    useEffect(() => {
        setTask(currTask)
        setGroup(board.groups[groupIdx])
    }, [board])


    console.log('task: ', task);
    console.log('group: ', group);

    return (

        <div className='modal-overlay'>
            <section className="task-details-container">

                <TaskHeader task={task} group={group} />
                <TaskMainDetails task={task} group={group} />
                <TaskMenu />
                <button className="task-details-close" >
                    Close
                </button>
            </section>
        </div >
    )
}

