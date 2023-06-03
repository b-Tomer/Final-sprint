import { ReactComponent as Clock } from '../../assets/img/icons/clock.svg'
import { ReactComponent as Member } from '../../assets/img/icons/member.svg'
import { ReactComponent as Info } from '../../assets/img/icons/info.svg'
import { ReactComponent as CustomFields } from '../../assets/img/icons/custom-fields.svg'
import { ReactComponent as Label } from '../../assets/img/icons/label.svg'
import { ReactComponent as CheckList } from '../../assets/img/icons/checklist.svg'
import { ReactComponent as Attachment } from '../../assets/img/icons/attachment.svg'


export function TaskMenu() {

    return (
        <div className="window-sidebar">
            <h3 className="mod-no-top-margin js-sidebar-add-heading">Add to card</h3>
            <div className="add-to-card-menu">
                <button className="button-link">
                    <Member className="sidebar-icon" />
                    <span>Members</span>
                </button>
                <button className="button-link" >
                    <Label className="sidebar-icon" />
                    <span>Labels</span> </button>
                <button className="button-link" >
                    <CheckList className="sidebar-icon" />
                    <span>Checklist</span> </button>
                <button className="button-link" >
                    <Clock className="sidebar-icon" />
                    <span>Dates</span> </button>
                <button className="button-link" >
                    <Attachment className="sidebar-icon" />
                    <span>Attachment</span> </button>
                <button className="button-link" >
                    <CustomFields className="sidebar-icon" />
                    <span>Custom Fields</span> </button>

            </div>



        </div >
    )
}




