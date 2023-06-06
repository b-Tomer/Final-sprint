import { ReactComponent as X } from '../../assets/img/icons/x.svg'


export function DynCmpAttachmentEdit(task) {


    function updateAttachment(atc){
    
    }

if(!task) return ''
    return (
        <div className="edit-attachment">

        <h5>Link name</h5>
        <input className="edit-attachment-input" type="text" />
        <div className="add-btns edit-attachment-btns">
                        <button  className="add-item-btn">Update</button>
                        <button  className="svg-holder">
                            <X className="list-icon icon-big" />
                        </button>
                    </div>
        </div>
    )
}