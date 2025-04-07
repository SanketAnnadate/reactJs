import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitHubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout/>,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />
//             },
//             {
//                 path: 'About',
//                 element: <About/>
//             },
//             {
//                 path: 'Contact',
//                 element: <Contact/>
//             }
//         ]
//     }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
           <Route path='' element={<Home/>}/>
           <Route path='About' element={<About/>}/>
           <Route path='Contact' element={<Contact/>}/>
           <Route path='User/:userid' element={<User/>}/>
           <Route 
           loader={gitHubInfoLoader}
           path='Github' 
           element={<Github/>}
           />
        </Route>
    )
)  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
