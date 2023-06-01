import { HomePage } from './pages/home-page.jsx'
import { BoardIndex } from './pages/board-index.jsx'
import { Workspace } from './pages/workspace.jsx'
import { TaskDetails } from './cmps/task/task-details.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home 🏠',
    },
    {
        path: '/workspace',
        component: <Workspace />,
        label: 'Workspace',
    },
    {
        path: 'board/:boardId',
        component: <BoardIndex />,
        label: 'Board',
    },
    {
        path: 'task/:taskId/:groupId',
        component: <TaskDetails />,
        label: 'Reviews',
    },
]

export default routes
