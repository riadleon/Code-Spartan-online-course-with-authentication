import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://code-spartans-server.vercel.app/courses')
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            },
        ]
    }
])