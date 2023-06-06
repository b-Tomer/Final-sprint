import { ImgUploader } from "../img-uploader"



export function DynCmpAttachment({ task }) {

  
    const inputClass= 'upload-btn'
    const labelClass= 'upload-label'

    return (
        <div className='dyn-cmp-attachments-container'>
            <div>
                <h3>Upload from</h3>
                <ImgUploader inputClass={inputClass} title={'Computer'} labelClass={labelClass} />
            
            </div>
            <hr />
            <div className="atc-link-container">
                <h3>Attach a link</h3>
                <input className="atc-link-input" type="text"
                    placeholder="Past any link here..." />
                <button className="attach-btn" >Attach</button>
            </div>
            <hr />
            <div className="atc-footer" >
                <p>Tip: You can drag and drop files and links onto cards to upload them.</p>
            </div>
        </div>
    )
}