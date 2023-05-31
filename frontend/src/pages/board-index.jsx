import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadGroups, addGroup, updateGroup, removeGroup, addToGroupt } from '../store/group.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { groupService } from '../services/group.service.js'

export function GroupIndex() {

    const groups = useSelector(storeState => storeState.groupModule.groups)

    useEffect(() => {
        loadGroups()
    }, [])

    async function onRemoveGroup(groupId) {
        try {
            await removeGroup(groupId)
            showSuccessMsg('Group removed')
        } catch (err) {
            showErrorMsg('Cannot remove group')
        }
    }

    async function onAddGroup() {
        const group = groupService.getEmptyGroup()
        group.vendor = prompt('Vendor?')
        try {
            const savedGroup = await addGroup(group)
            showSuccessMsg(`Group added (id: ${savedGroup._id})`)
        } catch (err) {
            showErrorMsg('Cannot add group')
        }
    }

    async function onUpdateGroup(group) {
        const price = +prompt('New price?')
        const groupToSave = { ...group, price }
        try {
            const savedGroup = await updateGroup(groupToSave)
            showSuccessMsg(`Group updated, new price: ${savedGroup.price}`)
        } catch (err) {
            showErrorMsg('Cannot update group')
        }
    }



    function onAddGroupMsg(group) {
        console.log(`TODO Adding msg to group`)
    }

    return (
        <div>
            <h3>Groups App</h3>
            <main>
                <button onClick={onAddGroup}>Add Group ⛐</button>
                <div className="group-group">
                    {groups.map(group =>


                        //    <GroupDetails group={group} />


                        // <div>
                        //     <button onClick={() => { onRemoveGroup(group._id) }}>x</button>
                        //     <button onClick={() => { onUpdateGroup(group) }}>Edit</button>
                        // </div>

                        // <button onClick={() => { onAddGroupMsg(group) }}>Add group msg</button>

                    )}

                </div>
            </main>
        </div>
    )
}