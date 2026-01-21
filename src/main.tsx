import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom'
import routes from './routes.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes as RouteObject[] 
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
