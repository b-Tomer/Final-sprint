import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { NotFound } from './pages/not-found'
import { Spotify } from 'cmps/spotify'

export function RootCmp() {
    const NotFoundOrRedirect = () => {
        const currentPath = window.location.pathname
        if (currentPath.startsWith('/board/')) {
            return <Navigate to="/notfound" replace />
        }
        return <NotFound />
    }

    // useEffect(() => {
    //     // global gooogle
    //     google.accounts.id.initialize({
    //         client_id:
    //             '422196780794-5co0o1pid2bhfjgt0hcvfjvvlmpr2bet.apps.googleusercontent.com',
    //     })
    // }, [])

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
                    <Spotify />
                </main>
            </Provider>
        </div>
    )
}
