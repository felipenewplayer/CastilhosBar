import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './assets/components/pages/LoginPage.jsx'
import { SignUpPage } from './assets/components/pages/SignUpPage.jsx'
import { ContextProvider } from './assets/context/GloabalContext.jsx'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/signUp",
            element: <SignUpPage />,
        },
    ]

)
createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
)
