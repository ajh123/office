import React from 'react';
import ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { FluentProvider, webLightTheme, Button } from '@fluentui/react-components';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <FluentProvider theme={webLightTheme}>
                Hello world!
                <Button appearance="primary">I am a button.</Button>
            </FluentProvider>
        </div>,
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