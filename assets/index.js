import React from 'react';
import ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { FluentProvider, webLightTheme, Button } from '@fluentui/react-components';
import { render } from '../home/assets/index'

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
        path: "/app/"+window.app,
        element: render(),
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);
