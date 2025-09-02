import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './GlobalStyle.ts'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import SobreMim from './routes/AboutMe/index.tsx'
import Projetos from './routes/Projects/index.tsx'
import Contato from './routes/Contact/index.tsx'
import Certifications from './routes/Certifications/index.tsx'
const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/sobre-mim',
      element:<SobreMim/>
    },
    {
      path:'/projetos',
      element:<Projetos/>
    },
    {
      path:'/certificacoes',
      element:<Certifications/>

    },
    {
      path:'/contato',
      element:<Contato/>
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
