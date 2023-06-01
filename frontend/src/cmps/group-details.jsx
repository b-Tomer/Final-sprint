import { TaskPreview } from "./task-preview";
import dots from '../assets/img/icons/dots.svg'
import plus from '../assets/img/icons/plus.svg'


export function GroupDetails({ group }) {


    function onChangegroupTitle(ev){
        const val = ev.target.value
        console.log(val);
    }


    return (
        <section className="group-container">
            <div className="group-header">
                <input className="txt-input" type="text" value={group.title} onChange={onChangegroupTitle} />
                <button><img className="" src={dots} alt="more" /></button>
            </div>
            <section className="group-content">

            {group.tasks.map(task =>
                    <TaskPreview task={task} key={task.id} />
            )}
            </section>
            <div className="group-footer">
                <button> <img src={plus} alt="" /> Add a card</button>
                {/* <button>%</button> */}
            </div>
        </section>
    )
}