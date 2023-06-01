import { useParams } from "react-router-dom";
import { TaskMenu } from "./task-menu.jsx";
import { TaskMainDetails } from "./task-main-details.jsx";
import { TaskHeader } from "./task-headet.jsx";



export function TaskDetails() {

    const { board } = useSelector((storeState) => storeState.boardModule)
    const { taskId, groupId } = useParams()
    const [task, setTask] = useState(null)
    // const [fields, handleChange, setFields] = useForm(null)


    useEffect(() => {
        const group = board?.groups.find(group => group.id === groupId)
        const task = board?.groups?.find(task => task.id === taskId)
        setTask(task)
        setGroup(group)

    }, [board]);

    return (
        <section className="task-details-container">

            <TaskHeader task={task} />
            <TaskMainDetails task={task} groupId={groupId} />
            <TaskMenu />

        </section>
    )


}