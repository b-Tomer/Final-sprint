
import { useState } from "react"
import { utilService } from "../../services/util.service"
import { updateTask } from "../../store/task.actions"
import { ImgUploader } from "../img-uploader"
import { uploadService } from "../../services/upload.service"
import { CLOSE_DYN_MODAL } from "../../store/system.reducer"
import { store } from "../../store/store"
import { showErrorMsg } from "../../services/event-bus.service"



export function DynCmpAttachment({ boardId, groupId, task }) {

    const inputClass = 'upload-btn'
    const labelClass = 'upload-label'
    const [isUploading, setIsUploading] = useState(false)
    const [userSrc, setUserSrc] = useState('')

    function onAddAttachment(src) {
        if (!src) return
        const newAtc = {
            "id": utilService.makeId(),
            "createdAt": Date.now(),
            "url": src
        }
        const updatedAttachments = task.attachments
            ? [...task.attachments, newAtc]
            : [newAtc]
        const updatedTask = {
            ...task,
            attachments: updatedAttachments,
        }
        updateTask(boardId, groupId, updatedTask)
    }

    async function uploadImg(ev) {
        setIsUploading(true)
        try {
            const { secure_url } = await uploadService.uploadImg(ev)
            onAddAttachment(secure_url)
            store.dispatch({ type: CLOSE_DYN_MODAL })
            setIsUploading(false)
        } catch (err) {
            showErrorMsg('Cannot upload try again')
            console.log(err);
        }
    }

    function onSrcChange(ev) {
        const { value } = ev.target
        setUserSrc(value)
        console.log(userSrc)
    }


    return (
        <div className='dyn-cmp-attachments-container'>
            <div>
                <h3>Upload from</h3>
                <label className={labelClass} htmlFor="imgUpload">{isUploading ? 'Uploading...' : 'Computer'}</label>
                <input className={inputClass} type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
            </div>
            <hr />
            <div className="atc-link-container">
                <h3>Attach a link</h3>
                <input
                    onChange={onSrcChange}
                    className="atc-link-input" type="text"
                    placeholder="Past any link here..." />
                <button onClick={()=>onAddAttachment(userSrc)} className="attach-btn" >Attach</button>
            </div>
            <hr />
            <div className="atc-footer" >
                <p>Tip: You can drag and drop files and links onto cards to upload them.</p>
            </div>
        </div>
    )
}