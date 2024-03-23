import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../../pages/Home";
import Blogs from "../../pages/Blogs";
import Blog from "../../pages/Blog";
import Bookmarks from "../../pages/Bookmarks";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=20')

            },
            {
                path: '/blog/:id',
                element: <Blog></Blog>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)

            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>
            }

        ]
    }



]);