import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/FAQ/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import CourseDetails from "../../pages/Others/CourseDetails/CourseDetails";
import LocationLeaflet from "../../pages/Others/LocationLeaflet/LocationLeaflet";
import Profile from "../../pages/Others/Profile/Profile";
import ThanksGiving from "../../pages/Others/ThanksGiving/ThanksGiving";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://code-spartans-server.vercel.app/courses/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/faq",
                element: <Faq></Faq>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },
            {
                path: "/map",
                element: <LocationLeaflet></LocationLeaflet>,
            },
            {
                path: "/thankyou",
                element: <ThanksGiving></ThanksGiving>,
            },
        ]
    }
])