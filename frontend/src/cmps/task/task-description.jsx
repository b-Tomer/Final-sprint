import { ReactComponent as Description } from '../../assets/img/icons/description.svg'


export function TaskDescription({ task }) {



    if (!task) return ''
    return (
        <div className="description">
            <div className="description-title">
                <Description className="task-content-icon" />
                <h3>Description</h3>
            </div>
            {!task.description && (
                <div className='description-container'>
                    <textarea
                        placeholder="Add a more detailed description.."
                        className="main-content-text-area"
                    ></textarea>
                </div>
            )}
            {task.description && (
                <p className="description-content">{task.description}</p>
            )}

            <div className="todo-btns">
                <button className="add-item-btn">
                    Add
                </button>
                <button
                    className="cancel-btn"
                >
                    Cancel
                </button>
            </div>

        </div>
    )
}