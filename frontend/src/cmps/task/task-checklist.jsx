import { ReactComponent as Checklist } from '../../assets/img/icons/checklist.svg'
import { useEffect, useState } from 'react';


export function TaskChecklist({ task }) {
    const [currentTask, setCurrentTask] = useState(task);

    let progress
    useEffect(() => {
        console.log('Progress changed:', progress);
    }, [progress]);

    const handleCheckboxChange = (checklistId, todoId) => {
        const updatedTask = { ...currentTask };
        const checklist = updatedTask.checklists.find(checklist => checklist.id === checklistId);
        const todo = checklist.todos.find(todo => todo.id === todoId);
        todo.isDone = !todo.isDone;
        setCurrentTask(updatedTask);
    };


    console.log('aaaa', task);
    if (!task.checklists || !task.checklists.length) return null;
    return (
        <div className='checklists-container'>
            {task.checklists.map(checklist => {
                const doneTodos = checklist.todos.filter(todo => todo.isDone);
                const progress = (doneTodos.length / checklist.todos.length) * 100;
                const isCompleted = progress === 100;

                return (
                    <div className='checklist-container' key={checklist.id}>
                        <div className="checklist-title">
                            <Checklist className="task-content-icon" />
                            <h3>{checklist.title}</h3>
                            <button>Delete</button>
                        </div>
                        <div className="progress-bar">
                            <span>{progress.toFixed(0)}%</span>
                            <div className={`empty-bar ${isCompleted ? 'completed' : ''}`}>
                                <div className={`fill-bar ${progress === 100 ? 'completed' : ''}`} style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                        <div className='todos'>
                            {checklist.todos.map(todo => (
                                <div className='todo' key={todo.id}>
                                    <input
                                        type="checkbox"
                                        id="todo"
                                        name="todo"
                                        checked={todo.isDone}
                                        onChange={() => handleCheckboxChange(checklist.id, todo.id)}
                                    />
                                    <h3>{todo.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}



