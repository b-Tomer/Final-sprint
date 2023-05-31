
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'group'

export const groupService = {
    query,
    getById,
    save,
    remove,
    getEmptyGroup,
    addGroupMsg
}
window.cs = groupService


async function query(filterBy = { txt: '', price: 0 }) {
    var groups = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        groups = groups.filter(group => regex.test(group.vendor) || regex.test(group.description))
    }
    if (filterBy.price) {
        groups = groups.filter(group => group.price <= filterBy.price)
    }
    return groups
}

function getById(groupId) {
    return storageService.get(STORAGE_KEY, groupId)
}

async function remove(groupId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, groupId)
}

async function save(group) {
    var savedGroup
    if (group._id) {
        savedGroup = await storageService.put(STORAGE_KEY, group)
    } else {
        // Later, owner is set by the backend
        group.owner = userService.getLoggedinUser()
        savedGroup = await storageService.post(STORAGE_KEY, group)
    }
    return savedGroup
}

async function addGroupMsg(groupId, txt) {
    // Later, this is all done by the backend
    const group = await getById(groupId)
    if (!group.msgs) group.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    group.msgs.push(msg)
    await storageService.put(STORAGE_KEY, group)

    return msg
}

function getEmptyGroup() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




