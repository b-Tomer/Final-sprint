import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'
import { UserDetails } from './pages/user-details'
import { Provider } from 'react-redux'
import { store } from './store/store'

export function RootCmp() {
    return (
        <div>
            <Provider store={store}>
        
                <main>
                    <Routes>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                exact={true}
                                element={route.component}
                                path={route.path}
                            />
                        ))}
                        <Route path="user/:id" element={<UserDetails />} />
                    </Routes>
                </main>
            </Provider>
        </div>
    )
}
