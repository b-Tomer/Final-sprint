import { HomePage } from './pages/home-page.jsx'
import { BoardIndex } from './pages/board-index.jsx'
import { Workspace } from './pages/workspace.jsx'
import { TaskDetails } from './cmps/task/task-details.jsx'
import { NotFound } from './pages/not-found.jsx'

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
        // path: '/modal/:itemId',
        // component: <TaskDetails />,
        // label: 'Task details',


        path: 'board/:boardId/:groupId/:taskId',
        component: <BoardIndex />,
        label: 'Task details',
    },
    {
        path: '/notfound',
        component: <NotFound />,
        label: 'Notfound',
    },
]

export default routes
