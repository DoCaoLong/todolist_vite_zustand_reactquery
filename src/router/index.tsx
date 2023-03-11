import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { TodoList } from "../components/TodoList";

export default function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/todo-list",
            element: <TodoList />,
        },
        {
            path: "/",
            element: <App />,
        },
    ]);

    return <RouterProvider router={router} />;
}
