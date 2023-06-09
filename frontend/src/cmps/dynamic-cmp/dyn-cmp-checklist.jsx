import { useRef } from 'react'
import { utilService } from '../../services/util.service'
import { useParams } from 'react-router-dom'
import { updateTask } from '../../store/task.actions'
import { store } from '../../store/store'
import { CLOSE_DYN_ALL_MODALS } from '../../store/system.reducer'
import { boardService } from 'services/board.service.local'
import { userService } from 'services/user.service'
import { useSelector } from 'react-redux'

export function DynCmpChecklist({ task }) {
    const { groupId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)
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
            activity.title = `Added ${inputRef.current.value} checklist to ${task.title}`
            activity.memberId = userService.getLoggedinUser()?._id
                ? userService.getLoggedinUser()._id
                : null
            activity.titleInTask = `Added ${inputRef.current.value} checklist`
            activity.taskId = task.id
            activity.by = userService.getLoggedinUser()?.fullname
                ? userService.getLoggedinUser().fullname
                : 'Guest'
            await updateTask(board, groupId, task, activity)
        } catch (err) {
            console.log('cant add checklist')
            console.log(err)
        } finally {
            store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        }
    }

    return (
        <div className="dyn-cmp-checklist-container">
            <h3 className="checklist-title">Title</h3>
            <input
                className="checklist-npt"
                type="text"
                placeholder="Checklist"
                ref={inputRef}
            />
            <button onClick={addChecklist}>Add</button>
        </div>
    )
}
