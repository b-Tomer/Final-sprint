import { gBoards } from './board.data'

const gUsers = [
    {
        _id: 'u101',
        fullname: 'Abi Abambi',
        username: 'abi@ababmi.com',
        password: 'aBambi123',
        imgUrl: 'http://some-img.jpg',
        mentions: [
            {
                //optional
                id: 'm101',
                boardId: 'm101',
                taskId: 't101',
            },
        ],
    },
]

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType, delay = 100) {
    if (entityType === 'board_db') {
        var entities = JSON.parse(localStorage.getItem(entityType)) || gBoards
    }
    if (entityType === 'user') {
        var entities = JSON.parse(localStorage.getItem(entityType)) || gUsers
    }
    return new Promise((resolve) => setTimeout(() => resolve(entities), delay))
}

function get(entityType, entityId) {
    return query(entityType).then((entities) => {
        const entity = entities.find((entity) => entity._id === entityId)
        if (!entity)
            throw new Error(
                `Get failed, cannot find entity with id: ${entityId} in: ${entityType}`
            )
        return entity
    })
}

function post(entityType, newEntity) {
    newEntity = JSON.parse(JSON.stringify(newEntity))
    console.log(newEntity)
    newEntity._id = _makeId()
    return query(entityType).then((entities) => {
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    })
}

function put(entityType, updatedEntity) {
    updatedEntity = JSON.parse(JSON.stringify(updatedEntity))
    return query(entityType).then((entities) => {
        const idx = entities.findIndex(
            (entity) => entity._id === updatedEntity._id
        )
        if (idx < 0)
            throw new Error(
                `Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`
            )
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType, entityId) {
    return query(entityType).then((entities) => {
        const idx = entities.findIndex((entity) => entity._id === entityId)
        if (idx < 0)
            throw new Error(
                `Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`
            )
        entities.splice(idx, 1)
        _save(entityType, entities)
    })
}

// Private functions

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
