import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './assets/components/pages/LoginPage.jsx'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
        },
        {
            path:"/login",
            element:<LoginPage/>,
        },
    ]

)
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
