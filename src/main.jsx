import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import MainLayouts from './Components/Layouts/MainLayouts.jsx'
import Blog from './pages/Blog.jsx'

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
