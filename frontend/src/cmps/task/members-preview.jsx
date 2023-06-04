import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { ReactComponent as Plus } from '../../assets/img/icons/plus.svg'




export function MembersPreview({ task }) {
  const { board } = useSelector((storeState) => storeState.boardModule)


  function getMemberImg(memberId) {
    if (!board.members) return
    const matchedMmbr = board.members.find(
      (member) => member._id === memberId
    )
    if (matchedMmbr.imgUrl) {
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
        {task.members.map(member => (
          < div key={member._id} >
            <img src={getMemberImg(member)} alt="Image" className='member-img' />
          </div>
        )
        )}
        <div className='add-member-icon'><Plus className='plus-icon' /> </div>
      </div>
    </div >
  )
}





