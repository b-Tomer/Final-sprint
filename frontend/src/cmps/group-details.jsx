<<<<<<< HEAD
import { TaskPreview } from "./task-preview";

=======
>>>>>>> 92a62fda305e60bb92ad54ecca8525cc0e46ecd4
export function GroupDetails({ group }) {





    return (
        <div>
            <div>
                <h1>{group.title}</h1>
                <button>...</button>
            </div>
            {group.tasks.map(task =>
                <div className="task-preview" key={task.id}>
                    <TaskPreview task={task} />
                </div>
            )}
            <div>
                <button>+ Add a card</button>
                <button>%</button>
            </div>
        </div>
    )
}