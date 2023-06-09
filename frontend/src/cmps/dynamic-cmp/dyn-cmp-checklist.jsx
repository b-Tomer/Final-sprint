import { useRef } from 'react'
import { utilService } from '../../services/util.service'
import { useParams } from 'react-router-dom'
import { updateTask } from '../../store/task.actions'
import { store } from '../../store/store'
import { CLOSE_DYN_ALL_MODALS } from '../../store/system.reducer'
import { boardService } from 'services/board.service.local'
import { userService } from 'services/user.service'

export function DynCmpChecklist({ task, setEditing }) {
    const { boardId } = useParams()
    const { groupId } = useParams()
    const inputRef = useRef(null)

    async function addChecklist(ev) {
        const checklist = {
            id: utilService.makeId(),
            todos: [],
            title: inputRef.current.value,
        }
        task.checklists.push(checklist)
        try {
            const activity = boardService.getEmptyActivity()
            activity.title = `Added "${inputRef.current.value}" checklist to: ${task.title}`
            activity.taskId = task.id
            activity.by = userService.getLoggedinUser()?.fullname
                ? userService.getLoggedinUser().fullname
                : 'Guest'
            await updateTask(boardId, groupId, task, activity)
        } catch (err) {
            console.log('cant add checklist')
            console.log(err)
        } finally {
            store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        }
    }

    return (
        <div className="dyn-cmp-checklist-container">
            <h3>Title</h3>
            <input type="text" placeholder="Checklist" ref={inputRef} />
            <button onClick={addChecklist}>Add</button>
        </div>
    )
}
