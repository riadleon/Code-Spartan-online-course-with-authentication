import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/FAQ/Faq";
import Home from "../../pages/Home/Home";
import CourseDetails from "../../pages/Others/CourseDetails/CourseDetails";
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
            {
                path: "/courses/:id",
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://code-spartans-server.vercel.app/courses/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/faq",
                element: <Faq></Faq>,
            },
        ]
    }
])