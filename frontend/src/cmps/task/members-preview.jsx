import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Plus } from '../../assets/img/icons/plus.svg'
import { store } from '../../store/store'
import { DynamicCmp } from '../dynamic-cmp/dynamic-cmp'
import {
    CLOSE_DYN_ALL_MODALS,
    OPEN_DYN_MEMBER_MODAL,
    OPEN_DYN_MODAL,
    SET_MODAL_TITLE,
} from '../../store/system.reducer'

export function MembersPreview({ task }) {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const { isOpenMemberModal } = useSelector(
        (storeState) => storeState.systemModule
    )
    const [modalPos, setModalPos] = useState(null)

    function onOpenMembersModal(ev) {
        const { top, left, height } = ev.target.getBoundingClientRect()
        setModalPos({ top, left, height })
        store.dispatch({ type: SET_MODAL_TITLE, title: 'Members' })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: OPEN_DYN_MODAL })
        store.dispatch({ type: OPEN_DYN_MEMBER_MODAL })
    }

    function getMemberImg(memberId) {
        if (!board.members) return
        const matchedMmbr = board.members.find(
            (member) => member._id === memberId
        )
        if (matchedMmbr?.imgUrl) {
            return matchedMmbr.imgUrl
        } else {
            return 'https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'
        }
    }

    if (!task?.members?.length) return null
    return (
        <div className="member-data">
            <h3 className="data-preview-title">Members</h3>
            <div className="members">
                {task.members.map((memberId) => (
                    <div key={memberId}>
                        <img
                            key={memberId}
                            src={getMemberImg(memberId)}
                            alt="Image"
                            className="member-img"
                        />
                    </div>
                ))}
                <div onClick={onOpenMembersModal} className="add-member-icon">
                    <Plus className="plus-icon" />{' '}
                </div>
            </div>
            {isOpenMemberModal && (
                <DynamicCmp
                    modalPos={modalPos}
                    task={task}
                    title="Edit attachment"
                />
            )}
        </div>
    )
}
