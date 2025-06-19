import { createBrowserRouter, Navigate } from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout"
import CategoryNews from "../pages/CategoryNews"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: `/category/:id`,
                element: <CategoryNews />,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <div>News</div>,
    },
    {
        path: '/auth',
        element: <div>Auth</div>,
    },
    {
        path: '*',
        element: <div>404 Not Found</div>,
    }
])

export default router