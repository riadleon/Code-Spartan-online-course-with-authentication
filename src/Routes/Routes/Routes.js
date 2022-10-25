import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                loader: () => fetch('https://code-spartans-server.vercel.app/courses/')
            },
        ]
    }
])