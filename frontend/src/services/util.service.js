export const utilService = {
    makeId,
    getRandomIntInclusive,
    debounce,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
    dueDateFormat,
    getModalPositionOnTop,
    checkOutOfBoundY,
    checkOutOfBoundX,
    handleDragEnd,
    handleDragUpdate,
    handleDragStart,
    getTimeValues,
    getTimestamp,
    getTimeInMilliseconds,
    applyStyles,
    removeStyles,
}

function makeId(length = 6) {
    var txt = ''
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function dueDateFormat(dueDate) {
    let strDate = ''
    strDate += `${new Date(dueDate).toLocaleString('en-US', {
        day: 'numeric',
    })} `
    strDate += `${new Date(dueDate).toLocaleString('en-US', {
        month: 'short',
    })}`
    return strDate
}

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

function getModalPositionOnTop(ref) {
    const rect = ref.current.getBoundingClientRect()
    const pos = { top: rect.top - 8, left: rect.left - 2.5 }
    return pos
}

function checkOutOfBoundY(windowPos, elePos) {
    if (windowPos.y - elePos.y + 20 < 0) {
        return true
    } else return false
}

function checkOutOfBoundX(windowPos, elePos) {
    if (windowPos.x - elePos.x < 0) {
        return true
    } else return false
}

function handleDragStart(event, draggedDOM) {
    const { clientHeight, clientWidth } = draggedDOM
    const sourceIndex = event.source.index
    let clientX
    let clientY

    if (event.type === 'group') {
        clientX =
            parseFloat(
                window.getComputedStyle(draggedDOM.parentNode).paddingLeft
            ) +
            [...draggedDOM.parentNode.children]
                .slice(0, sourceIndex)
                .reduce((total, curr) => {
                    return (
                        total +
                        curr.clientWidth +
                        parseFloat(getComputedStyle(curr).marginRight)
                    )
                }, 0) -
            draggedDOM.parentNode.scrollLeft

        clientY = parseFloat(window.getComputedStyle(draggedDOM.parentNode))
    }

    return {
        clientHeight,
        clientWidth,
        clientX,
        clientY,
    }
}

function handleDragUpdate(event, draggedDOM) {
    const { clientHeight, clientWidth } = draggedDOM
    const destinationIndex = event.destination.index
    const sourceIndex = event.source.index
    let clientX = 0
    let clientY = 0

    const childrenArray = [...draggedDOM.parentNode.children]
    const movedItem = childrenArray[sourceIndex]
    childrenArray.splice(sourceIndex, 1)

    let updatedArray = [
        ...childrenArray.slice(0, destinationIndex),
        movedItem,
        ...childrenArray.slice(destinationIndex + 1),
    ]

    if (event.type === 'group') {
        clientX =
            parseFloat(
                window.getComputedStyle(draggedDOM.parentNode).paddingLeft
            ) +
            updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
                return total + curr.clientWidth + 8
            }, 0) -
            draggedDOM.parentNode.scrollLeft
        clientY = parseFloat(window.getComputedStyle(draggedDOM.parentNode))
    }

    return { clientHeight, clientWidth, clientX, clientY }
}

function handleDragEnd(newBoard, destination, source, type) {
    const newBoardGroups = Array.from(newBoard.groups) // breaks pointer so we don't change the final object we send

    // reorder groups in the group list
    if (type === 'group') {
        // relocating the group in the groups array and sends the new board with updated groups array
        newBoardGroups.splice(source.index, 1)
        newBoardGroups.splice(
            destination.index,
            0,
            newBoard.groups[source.index]
        )
        newBoard.groups = newBoardGroups
        return newBoard

        // reorder tasks across the groups
    } else if (type === 'task') {
        const prevGroupIdx = newBoardGroups.findIndex(
            (group) => group.id === source.droppableId
        )
        const newGroupIdx = newBoardGroups.findIndex(
            (group) => group.id === destination.droppableId
        )
        const prevGroup = newBoardGroups[prevGroupIdx]
        const newGroup = newBoardGroups[newGroupIdx]

        // in case relocating task in the same group
        if (prevGroupIdx === newGroupIdx) {
            // in case the new task index is smaller
            if (destination.index < source.index) {
                newGroup.tasks.splice(
                    destination.index,
                    0,
                    newBoard.groups[prevGroupIdx].tasks[source.index]
                )
                prevGroup.tasks.splice(source.index + 1, 1)

                // in case the new task index is bigger
            } else {
                newGroup.tasks.splice(
                    destination.index + 1,
                    0,
                    newBoard.groups[prevGroupIdx].tasks[source.index]
                )
                prevGroup.tasks.splice(source.index, 1)
            }
            // in case new task location is on different group
        } else {
            newGroup.tasks.splice(
                destination.index,
                0,
                newBoard.groups[prevGroupIdx].tasks[source.index]
            )
            prevGroup.tasks.splice(source.index, 1)
        }

        newBoard.groups[newGroupIdx] = newGroup
        newBoard.groups[prevGroupIdx] = prevGroup
        return newBoard
    }
}
function getTimeValues(timestamp) {
    const date = new Date(timestamp)

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()

    return {
        year,
        month,
        day,
        hour,
        minute,
    }
}

function getTimestamp(year, month, day, hours, minutes) {
    const date = new Date(year, month, day, hours, minutes)
    return date.getTime()
}

function getTimeInMilliseconds(timestamp) {
    const date = new Date(timestamp)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const hoursInMilliseconds = hours * 60 * 60 * 1000
    const minutesInMilliseconds = minutes * 60 * 1000
    return hoursInMilliseconds + minutesInMilliseconds
}

function applyStyles(element, styles) {
    Object.assign(element.style, styles)
}

function removeStyles(element, styles) {
    for (const style in styles) {
        element.style.removeProperty(style)
    }
}
