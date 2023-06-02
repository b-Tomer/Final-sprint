import { useDispatch } from "react-redux";
import { taskService } from "../services/task.service.local";
import { getActionSetBoard } from "./board.actions";
import { store } from "./store";


export async function saveTask(task, boardId, groupId) {
  
    try {
        console.log('task from action: ', task )

        const board = await taskService.saveTask(task, boardId, groupId)
        store.dispatch(getActionSetBoard(board))
        return board
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