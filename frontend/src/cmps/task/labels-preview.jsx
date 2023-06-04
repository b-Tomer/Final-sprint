import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { ReactComponent as Plus } from '../../assets/img/icons/plus.svg'



export function LabelsPreview({ task }) {

  const { board } = useSelector((storeState) => storeState.boardModule)


  function getLabel(labelId) {
    if (!board.labels) return
    const matchedLabel = board.labels.find(
      (label) => label.id === labelId
    )
    console.log('hereeee', matchedLabel)
    return matchedLabel
  }



  if (!task?.labelIds?.length) return null
  console.log('labels preview task', task.labelIds)



  return (
    <div className="label-data">
      <h3 className="data-preview-title">Labels</h3>

      <div className="labels">
        {task.labelIds.map((labelId) => {

          const label = getLabel(labelId);
          if (!label) return null;
          return (
            < button key={labelId} className='label-button' style={{
              backgroundColor: label.color,
            }} >
              {label.title}
            </button>
          )
        })}

        <div className='add-label-icon'><Plus className='plus-icon' /> </div>
      </div>


    </div>
  )
}


// return (
//   <div className="member-data">
//     <h3 className="data-preview-title">Members</h3>
//     <div className="members">
//       {task.members.map((member) => {
//         return (
//           < div key={member._id} >
//             <img src={getMemberImg(member)} alt="Image" className='member-img' />
//           </div>
//         )
//       })}
//       <div className='add-member-icon'><Plus className='plus-icon' /> </div>
//     </div>
//   </div >
// )