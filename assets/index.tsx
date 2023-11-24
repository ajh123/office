import React from 'react';
import ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { FluentProvider, webLightTheme, Button } from '@fluentui/react-components';
import { render } from '../home/assets/index.tsx'


let routes = [
    {
        path: "/",
        element: <FluentProvider theme={webLightTheme}>
            Hello world!
            <Button appearance="primary">I am a button.</Button>
        </FluentProvider>
    }
]

if (window.app != undefined) {
    routes.push({
        path: window.miners_office.path_base+window.app,
        element: render(),
    })
}

const router = createBrowserRouter(routes);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);
