import { useRef } from 'react'
import { utilService } from '../../services/util.service'
import { useParams } from 'react-router-dom'
import { updateTask } from '../../store/task.actions'

export function DynCmpChecklist({ task, onCloseDynModal, setEditing }) {
    const { boardId } = useParams()
    const { groupId } = useParams()
    const inputRef = useRef(null)

    async function addChecklist() {
        const checklist = {
            id: utilService.makeId(),
            todos: [],
            title: inputRef.current.value,
        }
        task.checklists.push(checklist)
        try {
            await updateTask(boardId, groupId, task)
        } catch (err) {
            console.log('cant add checklist')
            console.log(err)
        }
        onCloseDynModal()
    }

    return (
        <div className="dyn-cmp-checklist-container">
            <h3>Title</h3>
            <input type="text" placeholder="Checklist" ref={inputRef} />
            <button onClick={addChecklist}>Add</button>
        </div>
    )
}
