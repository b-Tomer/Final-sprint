import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadLists, addList, updateList, removeList, addToListt } from '../store/list.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { listService } from '../services/list.service.js'

export function ListIndex() {

    const lists = useSelector(storeState => storeState.listModule.lists)

    useEffect(() => {
        loadLists()
    }, [])

    async function onRemoveList(listId) {
        try {
            await removeList(listId)
            showSuccessMsg('List removed')
        } catch (err) {
            showErrorMsg('Cannot remove list')
        }
    }

    async function onAddList() {
        const list = listService.getEmptyList()
        list.vendor = prompt('Vendor?')
        try {
            const savedList = await addList(list)
            showSuccessMsg(`List added (id: ${savedList._id})`)
        } catch (err) {
            showErrorMsg('Cannot add list')
        }
    }

    async function onUpdateList(list) {
        const price = +prompt('New price?')
        const listToSave = { ...list, price }
        try {
            const savedList = await updateList(listToSave)
            showSuccessMsg(`List updated, new price: ${savedList.price}`)
        } catch (err) {
            showErrorMsg('Cannot update list')
        }
    }



    function onAddListMsg(list) {
        console.log(`TODO Adding msg to list`)
    }

    return (
        <div>
            <h3>Lists App</h3>
            <main>
                <button onClick={onAddList}>Add List ⛐</button>
                <ul className="list-list">
                    {lists.map(list =>
                        <li className="list-preview" key={list._id}>
                            <h4>{list.title}</h4>
                            {cards.map(card =>
                                <ul>
                                    <li className="card-preview" key={card._id}>
                                        <h4>{card.title}</h4>
                                    </li>
                                </ul>
                            )}

                            <div>
                                <button onClick={() => { onRemoveList(list._id) }}>x</button>
                                <button onClick={() => { onUpdateList(list) }}>Edit</button>
                            </div>

                            <button onClick={() => { onAddListMsg(list) }}>Add list msg</button>

                        </li>)
                    }
                </ul>
            </main>
        </div>
    )
}