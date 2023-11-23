import React from 'react';
import ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/apps",
        element: <div>Hello apps.</div>,
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);