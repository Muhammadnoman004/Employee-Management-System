import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../../App';
import loading from '../../Context/Context';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

export default function Navigation() {
    const [loader, setloader] = useState(true);

    return (
        <loading.Provider value={[loader, setloader]} >
            <RouterProvider router={router} />
        </loading.Provider>
    )
}
