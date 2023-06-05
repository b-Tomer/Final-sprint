import React, { useState } from 'react';
import { ReactComponent as Down } from '../../assets/img/icons/down.svg'

import { ResponsiveDatePickers } from '../date-picker'


export function DatePreview({ task }) {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    if (!task || !task.dueDate) return
    console.log('in date', task)

    const timestamp = task.dueDate
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });


    const handleToggleDatePicker = () => {
        setIsDatePickerOpen((prevIsOpen) => !prevIsOpen);
    };


    return (
        <div className="date-data">
            <h3 className="data-preview-title">Due date</h3>
            <div className='date-details'>
                <input
                    type="checkbox"
                // id=""
                // name=""
                // checked={}
                // onChange={() => handleCheckboxChange(checklist.id, todo.id)}
                />
                <div className='full-date'>

                    <span className='time'>{formattedDate}</span>
                    <Down
                        className='down-img'
                        src={Down}
                        alt=""
                    />


                    {/* {isDatePickerOpen && <ResponsiveDatePickers className='date-picker' />} */}
                </div>
            </div>
        </div >
    )
}

