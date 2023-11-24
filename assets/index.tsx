import React from 'react';
import ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Button } from '@fluentui/react-components';
import { render } from '../home/assets/index.tsx'
import { AppBase } from './app_base.tsx'


interface  OfficeWindow extends Window {
    app: string,
    miners_office: {
        path_base: string
    }
}

let routes = [
    {
        path: "/",
        element: <AppBase>
            Hello world!
            <Button appearance="primary">I am a button.</Button>
        </AppBase>
    }
]

let win = (window as unknown) as OfficeWindow;
if (win.app != undefined) {
    routes.push({
        path: win.miners_office.path_base+win.app,
        element: render(),
    })
}

const router = createBrowserRouter(routes);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById('root')
);
