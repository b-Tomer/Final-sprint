
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'board'

export const boardService = {
    query,
    getById,
    save,
    remove,
    getEmptyBoard,
}
window.cs = boardService


async function query(filterBy = { txt: '' }) {
    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(boardId) {
    return httpService.get(`board/${boardId}`)
}

async function remove(boardId) {
    return httpService.delete(`board/${boardId}`)
}
async function save(board) {
    var savedBoard
    if (board._id) {
        savedBoard = await httpService.put(`board/${board._id}`, board)

    } else {
        savedBoard = await httpService.post('board', board)
    }
    return savedBoard
}

function getEmptyBoard() {
    return {
        "title": '',
        "members": [],
        "labels": [
            {
                "id": "l101",
                "title": "Marketing",
                "color": "#4bce97"
            },
            {
                "id": "l102",
                "title": "Frontend",
                "color": "#e2b203"
            },
            {
                "id": "l103",
                "title": "Backend",
                "color": "#faa53d"
            },
            {
                "id": "l104",
                "title": "Finance",
                "color": "#f87462"
            },
            {
                "id": "l105",
                "title": "Operations",
                "color": "#9f8fef"
            },
            {
                "id": "l106",
                "title": "Manufacturing",
                "color": "#579dff"
            }
        ]
    }
}





