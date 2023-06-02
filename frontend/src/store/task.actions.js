import { useDispatch } from "react-redux";
import { taskService } from "../services/task.service.local";
import { getActionSetBoard } from "./board.actions";


export async function saveTask(task, boardId, groupId) {
    const dispatch = useDispatch()


    try {
        const board = await taskService.saveTask(task, boardId, groupId)
        dispatch(getActionSetBoard(board))
    } catch (err) {
        console.log('err in saving task');
    }
}


export async function removeTask(boardId ,groupId, taskId) {
    try {
        const board = await taskService.removeTask(boardId ,groupId,taskId )
        store.dispatch(getActionSetBoard(board))
    } catch (err) {
        console.log('Cannot remove task', err)
    }
}