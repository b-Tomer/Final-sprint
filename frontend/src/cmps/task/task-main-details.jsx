import { TaskData } from './task-data.jsx'
import { TaskMainContent } from './task-main-content.jsx'
import { TaskMenu } from './task-menu.jsx'

export function TaskMainDetails({
    task,
    groupId,
    boardId,
    setEditing,
    editing,
    setDynamicCmpName,
}) {
    return (
        <section className="task-main-details">
            <TaskData task={task} setDynamicCmpName={setDynamicCmpName} />
            <TaskMainContent
                boardId={boardId}
                groupId={groupId}
                task={task}
                setEditing={setEditing}
                editing={editing}
            />
        </section>
    )
}
