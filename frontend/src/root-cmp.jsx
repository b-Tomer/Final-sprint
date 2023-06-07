import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { NotFound } from './pages/not-found'

export function RootCmp() {
    const NotFoundOrRedirect = () => {
        const currentPath = window.location.pathname
        if (currentPath.startsWith('/board/')) {
            return <Navigate to="/notfound" replace />
        }
        return <NotFound />
    }

    return (
        <div>
            <Provider store={store}>
                <main>
                    <Routes>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                        <Route path="*" element={<NotFoundOrRedirect />} />
                    </Routes>
                </main>
            </Provider>
        </div>
    )
}
