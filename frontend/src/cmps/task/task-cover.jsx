import { ReactComponent as X } from '../../assets/img/icons/x.svg'


export function TaskCover({task, simpleCloseModal}){

    if (!task) return ''
    return(
        <section className="task-cover">
            
            <button
                    className="task-details-close"
                    onClick={simpleCloseModal}  >
                    <X className="task-icon-img" />
                </button>

            {(task.style?.bgColor || task.style?.backgroundImage) && (
                <div
                    className="task-header"
                    style={
                        !task.style?.backgroundImage
                            ? {
                                  backgroundColor: task.style.bgColor,
                              }
                            : { backgroundColor: '' }
                    }
                >
                    <img
                        className="task-cover-img"
                        src={task.style.backgroundImage}
                        alt=""
                    />
                </div>
            )}
               
        </section>        
    )
}