import { ReactComponent as Checklist } from '../../assets/img/icons/checklist.svg'


export function TaskChecklist({ task }) {

    let progress



    console.log('aaaa', task)
    if (!task.checklists || !task.checklists.length) return
    return (
        <div className='checklists-container'>
            {task.checklists.map(checklist =>

                < div className='checklist-container' >
                    <div key={checklist.id} className="checklist-title" >
                        <Checklist className="task-content-icon" />
                        <h3>{checklist.title}</h3>
                        <button>Delete</button>
                    </div>
                    <div className="progress-bar">
                        {/* <span>{progress}%</span> */}
                        <span>{(() => {
                            const doneTodos = checklist.todos.filter((todo) => todo.isDone);
                            const progress = (doneTodos.length / checklist.todos.length) * 100;
                            return `${progress}%`;
                        })()}</span>
                        <div className='empty-bar' >
                            <div className='fill-bar' style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                    <div className='todos'>
                        {checklist.todos.map(todo =>
                            <div className='todo' key={todo.id}>
                                <input type="checkbox" id="todo" name="todo" checked={todo.isDone}></input>
                                <h3>{todo.title}</h3>
                            </div>)}
                    </div>
                </div>)
            }
        </div >
    )
}







