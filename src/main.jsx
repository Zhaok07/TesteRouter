import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Paginaum from './paginaum.jsx'
import Paginadois from './paginadois.jsx'

const router = createBrowserRouter([
 { 
  path: "/",
  element: <Paginaum/>,
},
{
  path: "/dois",
  element: <Paginadois/>
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
