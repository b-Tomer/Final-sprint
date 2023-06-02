import { TaskPreview } from "./task/task-preview";
import dots from '../assets/img/icons/dots.svg'
import { ReactComponent as Plus } from '../assets/img/icons/plus.svg'
import { useState } from "react";
import { groupService } from "../services/group.service.local";
import { ReactComponent as X } from '../assets/img/icons/x.svg'
import { taskService } from "../services/task.service.local";
import { saveTask } from "../store/task.actions";



export function GroupDetails({ group, removeGroup, boardId }) {

    const [groupToUpdate, setGroupToUpdate] = useState(group)
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
    const [task, setTask] = useState(taskService.getDefaultTask())

    function onChangegroupTitle(ev) {
        const val = ev.target.value
        setGroupToUpdate((prevGroup) => ({
            ...prevGroup,
            title: val
        }))
        groupService.saveGroup(val, boardId, group.id)
    }

    function onRemoveGroup() {
        removeGroup(group)
    }

    function onOpenAddTask() {
        setIsAddTaskOpen(!isAddTaskOpen)
    }

    function handleTaskTitle(ev) {
        const { value } = ev.target
        let newTask = task
        newTask.title = value
        setTask(newTask)

    }

   async function onAddTask(task) {
        console.log(task);
       try{
           await saveTask(task, boardId, groupId)
        }catch(err){
            console.log(err);
        }

    }

    function onAddClose() {
        setIsAddTaskOpen(false)
    }

    return (
        <section className="group-container">
            <div className="group-header">
                <input className="txt-input" type="text" value={groupToUpdate.title} onChange={onChangegroupTitle} />
                <button><img onClick={onRemoveGroup} src={dots} alt="more" /></button>
            </div>
            <section className="group-content">

                {group.tasks.map(task =>
                    <TaskPreview task={task} key={task.id} />
                )}
                {isAddTaskOpen && <div className="task-container">
                    <textarea className="txt-container " onChange={handleTaskTitle} name="" id="" cols="30" rows="2s"></textarea>
                    <div className="add-btns">
                        <button onClick={onAddTask} className="add-item-btn">Add card</button>
                        <button onClick={onAddClose} className="svg-holder">
                            <X className="list-icon icon-big" />
                        </button>
                    </div>
                </div>}
            </section>
            <div className="group-footer">
                {!isAddTaskOpen && <button onClick={onOpenAddTask} ><Plus className="list-icon" /> Add a card</button>}

            </div>
        </section>
    )
}

// .list-icon