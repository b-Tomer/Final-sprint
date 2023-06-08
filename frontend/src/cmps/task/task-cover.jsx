import { ReactComponent as X } from '../../assets/img/icons/x.svg'

export function TaskCover({ task, simpleCloseModal }) {

    if (!task) return null
    return (
        <section className="task-cover">

            <button
                className="task-details-cover-close"
                onClick={simpleCloseModal}  >
                <X className="task-icon-img" />
            </button>

            {(task.style?.bgColor || task.style?.backgroundImage) && (
                <div
                    className="task-cover"
                    style={{
                        backgroundColor: task.style.bgColor,
                        backgroundImage: `url(${task.style.backgroundImage})`,
                    }}
                ></div>
            )}
        </section>
    )
}
