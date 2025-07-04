import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from "./Layout.jsx"
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
  


import './index.css'

// 2 METHODS FOR ROUTING 

//fIRST METHOD

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout/>,
//         children: [
//             {
//                 path:"",
//                 element: <Home />

//             },
//             {
//                 path: "about",
//                 element: <About/>
//             },
//             {
//                 path: "contact",
//                 element: <Contact/>
//             }
//         ]
//     }
// ])



// SECOND METHOD
const router = createBrowserRouter (
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path='user/:userId' element={<User />} />
            <Route 
            loader={githubInfoLoader} 
            //can be done without loader function as well
            // but loader function is more efficient as it fetches data before rendering the component
            // can be used to fetch data from an API or any other source
            path='github' 
            element={<Github />} />
        </Route>
    )
)
createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router}/>
 </React.StrictMode>,
)
