import { taskService } from "../services/task.service.local";
import { getActionSetBoard } from "./board.actions";


export async function saveTask(task, boardId, groupId) {

    try {
        const board = await taskService.saveTask(task, boardId, groupId)
        dispatch(getActionSetBoard(board))
    } catch (err) {
        console.log('err in saving task');
    }
}

